<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Str;
use Carbon\Carbon;
use View;
use Auth;
use PDF;
use File;
use Storage;
use Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\URL;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use DateTime;
use Redirect,
    Session;

class ApiController extends Controller
{

    /**
     * function name continue_mobile
     * This function is used forreguster with mobile no.
     * Created Date - 05-10-2023
     * Updated date - 06-10-2023,07-10-2023,09-10-2023
     * */
    public function continue_mobile(Request $request){
        $validator = Validator::make($request->all(), [
            'country_code'=>'required|numeric',
            'contact'=>'required|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:0',
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $country_code = $request->input('country_code');
            $contact = $request->input('contact');
            $otp = rand(111111,999999);
            $secret_key = Str::random(20);

            $add_mobile = DB::insert("CALL insert_update_mobile(?,?,?,?)", array($country_code,$contact,$otp,$secret_key)); 

            if($add_mobile){
                $fulldata=array();
                $fulldata['otp']= $otp;
                    $fulldata = array(
                        'otp' => $fulldata['otp']
                    );
                return response()->json(['status' =>true, 'message' => 'OTP send successfully','code' => 200, 'data' => $fulldata], 200);
            }else{
                return response()->json(['status' =>false, 'message' => 'OTP failed','code' => 200, 'data' => (object) []], 200);
            }
        }
    }

    /**
     * function name verify_otp
     * This function is used for the verify otp
     * Created Date - 06-10-2023
     * Updated Date - 07
     * */
    public function verify_otp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'contact' => 'required|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:0',
            'otp'=>'required|numeric',
            'country_code'=>'required|numeric',
            'device_id'=>'required',
            'device_type'=>'required',
            'player_id'=>'required'

        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        } else {
            $contact = $request->input('contact');
            $otp = $request->input('otp');
            $country_code = $request->input('country_code');
            $device_id = $request->input('device_id');
            $device_type = $request->input('device_type');
            $player_id = $request->input('player_id');

            $result = DB::select("CALL checkmobilewithotp(?,?,?,@result)", array($country_code,$contact,$otp));
            $resultvalue = DB::select('SELECT @result as result')[0]->result;

            // Compare the input OTP with the one stored in the session
            if ($resultvalue == 1) {
                $email="";
                $social_id="";
                $verified_user = DB::select("CALL check_user_already_exists(?,?,?,?)", array($contact,$country_code,$email,$social_id));
                if($verified_user){ 
                    $user_id = $verified_user[0]->id;
                    $api_token = Str::random(20);
                    $verifiedtoken = DB::select("CALL check_update_insert_token(?,?,?,?,?)", array($user_id,$device_id,$api_token,$device_type,$player_id));
                    $userdata = array(
                        'id' => $verified_user[0]->id,
                        'name' => $verified_user[0]->name,
                        'email' => $verified_user[0]->email,
                        'contact' => $verified_user[0]->contact,
                        'country_code' => $verified_user[0]->country_code,
                        'user_type' => $verified_user[0]->user_type,
                        'terms' => $verified_user[0]->terms,
                        'user_image' => $verified_user[0]->user_image,
                        'api_token'=> $api_token
                    );
                    // OTP is valid
                    return response()->json(['status' => true, 'message' => 'Login successfully!','code' => 200, 'data' => $userdata], 200);
                }else{
                    return response()->json(['status' => true, 'message' => 'OTP verified successfully','code' => 200, 'data' => (object) []], 200);
                }
            } else if ($resultvalue == 0){
                  // OTP is invalid
                return response()->json(['status' =>false, 'message' => 'Mobile number & OTP not match','code' => 200, 'data' => (object) []], 200);
            }
            else {
                // OTP is invalid
                return response()->json(['status' =>false, 'message' => 'Incorrect OTP please, try again','code' => 200, 'data' => (object) []], 200);
            }
        }
    }

    /**
     * function name register
     * This function is used for user customer/service provider register 
     * Created Date - 05-10-2023
     * Updated Date - 06-10-2023,07-10-2023,10-10-2023
     * */
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'nullable', 
            'social_id'=>'nullable',
            'contact'=>'nullable',
            'country_code'=>'nullable',
            'user_type' => 'required|numeric',
            'terms'=>'required|numeric',
            'device_id'=>'required',
            'device_type'=>'required',
            'user_image'=>'nullable',
            'player_id'=>'required'
        ]);

        $validator->sometimes(['contact', 'country_code'], 'required_with:contact,country_code', function ($input) {
            return empty($input->contact) || empty($input->country_code);
        });
        $validator->sometimes(['email', 'social_id'], 'required_with:email,social_id', function ($input) {
            return empty($input->email) || empty($input->social_id);
        });

        $validator->sometimes(['contact', 'email','country_code'], 'required', function ($input) {
            return empty($input->contact) && empty($input->email) && empty($input->country_code) ;
        });

        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $name = $request->input('name');
            $email = $request->input('email');
            $social_id = $request->input('social_id');
            $contact = $request->input('contact');
            $country_code = $request->input('country_code');
            $user_type = $request->input('user_type');
            $terms = $request->input('terms');
            $device_id = $request->input('device_id');
            $device_type = $request->input('device_type');
            $user_image = $request->input('user_image');
            $player_id = $request->input('player_id');
            $status = '1';
            $api_token = Str::random(20);

            $result = DB::insert("CALL add_check_user(?,?,?,?,?,?,?,?,?,?,?,?,@isRegister)", array($name,$email,$social_id,$contact,$country_code,$user_type,$terms,$device_id,$device_type,$user_image,$player_id,$status));
            $resultvalue = DB::select('SELECT @isRegister as isRegister')[0]->isRegister;
            
            if ($resultvalue==1) {
                $verified_user = DB::select("CALL check_user_already_exists(?,?,?,?)", array($contact,$country_code,$email,$social_id));
                    if($verified_user){
                    $user_id = $verified_user[0]->id;
                    $verifiedtoken = DB::select("CALL check_update_insert_token(?,?,?,?,?)", array($user_id,$device_id,$api_token,$device_type,$player_id));
                        $userdata = array(
                        'id' => $verified_user[0]->id,
                        'name' => $verified_user[0]->name,
                        'email' => $verified_user[0]->email,
                        'social_id' => $verified_user[0]->social_id,
                        'contact' => $verified_user[0]->contact,
                        'country_code' => $verified_user[0]->country_code,
                        'user_type' => $verified_user[0]->user_type,
                        'terms' => $verified_user[0]->terms,
                        'user_image' => $verified_user[0]->user_image,
                        'api_token'=> $api_token  
                    );
                        return response()->json(['status' => true, 'message' => 'User register successfully!','code' => 200, 'data' => $userdata], 200);
                    }else{
                        return response()->json(['status' => false, 'message' => 'User registeration failed!','code' => 200, 'data' =>  (object)[]], 200);
                    }
            }else if ($resultvalue==0){
                return response()->json(['status' => false, 'message' => 'User already registered!','code' => 200, 'data' =>  (object)[]], 200);
            }else{
                  return response()->json(['status' => false, 'message' => 'User registeration failed!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name CountryData
     * This function is helps to get of countries data.
     * Created Date - 06-10-2023
     * */

    public function CountryData(Request $request)
    {
        $country_data = DB::select("CALL get_country_details()");
        if (count($country_data) > 0) {
                return response()->json(['status' => true, 'message' => 'Countries fetch successfully!','code' => 200, 'data' => $country_data], 200);
            } else {
            return response()->json(['status' => false, 'message' => 'Something went wrong while fetching data!','code' => 200, 'data' =>  (object)[]], 200);
        }
    }

    /**
     * function name get_categories
     * This function is used for get the categories data
     * Created Date - 09-10-2023
     * */
    public function get_categories(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $check = DB::select("call token_check(?,?)", array($user_id, $api_token));
            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                    $category_list= DB::select("CALL fetch_category()");
                    return response()->json(['status' => true, 'message' => 'Countries fetch successfully!','code' => 200, 'data' => $category_list], 200);
                        if(empty($category_list)){
                            return response()->json(['status' => false, 'message' => 'Categories not available!','code' => 200, 'data' =>  (object)[]], 200);
                    }
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name get_reviews
     * This function is used for get the reviews data
     * Created Date - 09-10-2023
     * */
    public function get_reviews(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $check = DB::select("call token_check(?,?)", array($user_id, $api_token));
            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                    $reviews_list= DB::select("CALL fetch_reviews()");
                    return response()->json(['status' => true, 'message' => 'Reviews data fetch successfully!','code' => 200, 'data' => $reviews_list], 200);
                        if(empty($reviews_list)){
                            return response()->json(['status' => false, 'message' => 'Reviews not available!','code' => 200, 'data' =>  (object)[]], 200);
                    }
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name add_reviews
     * This function is used for to adding the reviews data
     * Created Date - 09-10-2023
     * */
    public function add_reviews(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
            'to_id'=>'required',
            'review'=>'required',
            'rating'=>'required|numeric',
            'approved'=>'required|numeric'
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        }
            return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $to_id = $request->get('to_id');
            $review = $request->get('review');
            $rating = $request->get('rating');
            $approved = $request->get('approved');
            $check = DB::select("call token_check(?,?)", array($user_id, $api_token));

            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                    $user_id = $request->input('user_id');
                    $to_id = $request->input('to_id');
                    $review = $request->input('review');
                    $rating = $request->input('rating');
                    $approved = $request->input('approved');
                    $created_at = date("Y-m-d H:i:s");
                    $add_data = DB::insert("CALL add_reviews(?,?,?,?,?,?)", array($user_id, $to_id, $review, $rating, $approved,$created_at));
                        if($add_data){
                            return response()->json(['status' => true, 'message' => 'Review added successfully!','code' => 200, 'data' => (object)[]], 200);
                        }else{      
                            return response()->json(['status' => false, 'message' => 'Reviews not added!','code' => 200, 'data' =>  (object)[]], 200);         
                        }
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name continue_email
     * This function is used for user continue with email
     * Created Date - 09-10-2023
     * Updated Date - 10-10-2023
     * */
    public function continue_email(Request $request){
        $validator = Validator::make($request->all(), [
            'email'=>'required|regex:/(.+)@(.+)\.(.+)/i',
            'social_id'=>'required|numeric|min:0',
            'device_id'=>'required',
            'device_type'=>'required',
            'player_id'=>'required'
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        } 
        return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $email = $request->input('email');
            $social_id = $request->input('social_id');
            $device_id = $request->input('device_id');
            $device_type = $request->input('device_type');
            $player_id = $request->input('player_id');

            $contact="";
            $country_code="";
            $verified_user = DB::select("CALL check_user_already_exists(?,?,?,?)", array($contact,$country_code,$email,$social_id));
                if($verified_user){ 
                    $user_id = $verified_user[0]->id;
                    $api_token = Str::random(20);
                    $verifiedtoken = DB::select("CALL check_update_insert_token(?,?,?,?,?)", array($user_id,$device_id,$api_token,$device_type,$player_id));
                    $userdata = array(
                        'id' => $verified_user[0]->id,
                        'name' => $verified_user[0]->name,
                        'email' => $verified_user[0]->email,
                        'social_id' => $verified_user[0]->social_id,
                        'contact' => $verified_user[0]->contact,
                        'country_code' => $verified_user[0]->country_code,
                        'user_type' => $verified_user[0]->user_type,
                        'terms' => $verified_user[0]->terms,
                        'user_image' => $verified_user[0]->user_image,
                        'api_token'=> $api_token
                    );
                    // OTP is valid
                    return response()->json(['status' => true, 'message' => 'Login successfully!','code' => 200, 'data' => $userdata], 200);
                }else{
                    return response()->json(['status' => true, 'message' => 'Welcome please complete your registration!','code' => 200, 'data' => (object) []], 200);
                }
        }   
    }

    /**
     * function name view_single_profile
     * This function is used for view the single user profile data
     * Created Date - 10-10-2023
     * */
    public function view_single_profile(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        } 
        return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $check = DB::select("CALL token_check(?,?)", array($user_id, $api_token));

            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                    $user_data = DB::select("CALL view_user_profile(?)", array($user_id));
                    $userdata_main = array();
                    $userdata_main['id'] = $user_data[0]->id;
                    $userdata_main['name'] = $user_data[0]->name;
                    $userdata_main['email'] = $user_data[0]->email;
                    $userdata_main['contact'] = $user_data[0]->contact;
                    $userdata_main['country_code'] = $user_data[0]->country_code;
                    $userdata_main['user_type'] = $user_data[0]->user_type;
                    return response()->json(['status' => true, 'message' => 'User data fetched successfully!','code' => 200, 'data' => $userdata_main], 200);
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name add_favourites
     * This function is used for adding the favourites data
     * Created Date - 10-10-2023
     * */
    public function add_favourites(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
            'service_id'=>'required|numeric'
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        } 
        return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $check = DB::select("CALL token_check(?,?)", array($user_id, $api_token));

            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                        $service_id = $request->input('service_id');
                        $created_at = date("Y-m-d H:i:s");
                        $add_data = DB::insert("CALL add_favourites(?,?,?)", array($user_id, $service_id,$created_at));
                        if($add_data){
                            return response()->json(['status' => true, 'message' => 'Favourites added successfully!','code' => 200, 'data' => (object)[]], 200);
                        }else{      
                            return response()->json(['status' => false, 'message' => 'Favourites not added!','code' => 200, 'data' =>  (object)[]], 200);         
                        }
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }

    /**
     * function name delete_favourites
     * This function is used for deleting the favourites data
     * Created Date - 10-10-2023
     * */
    public function delete_favourites(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id'=>'required|numeric',
            'api_token'=>'required',
        ]);
        $key = array();
        if ($validator->fails()) {
        $errors = "";
        foreach ($validator->messages()->getMessages() as $field_name => $messages) {
            // Go through each message for this field.
            foreach ($messages as $message) {
                $errors .= $message;
                return response()->json(['message' => $errors,'status'=> false,'code' => 200, 'data' =>(object) []], 200);
            }
        } 
        return response()->json(['message' => 'Validation error','status'=> false,'code' => 200,'data' => (object)[]], 200);
        }else{
            $user_id = $request->get('user_id');
            $api_token = $request->get('api_token');
            $check = DB::select("CALL token_check(?,?)", array($user_id, $api_token));

            if(count($check)>0){
                if($check[0]->api_token == $api_token){
                        $delete_data = DB::update("CALL delete_favourites(?,?)", array($user_id, 1));
                        if($delete_data){
                            return response()->json(['status' => true, 'message' => 'Favourites data deleted successfully!','code' => 200, 'data' => (object)[]], 200);
                        }else{      
                            return response()->json(['status' => false, 'message' => 'Favourites data not deleted!','code' => 200, 'data' =>  (object)[]], 200);         
                        }
                }
            }else{
                return response()->json(['status' => false, 'message' => 'Auth Token not match!','code' => 200, 'data' =>  (object)[]], 200);
            }
        }
    }
}
