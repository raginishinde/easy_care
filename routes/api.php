<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*-----------------Continue with number -----------------*/
Route::post('/continue_mobile', [ApiController::class, 'continue_mobile']);
/*-----------------Verify the OTP -----------------*/
Route::post('/verify_otp', [ApiController::class, 'verify_otp']);
/*-----------------Register -----------------*/
Route::post('/register', [ApiController::class, 'register']);
/*-----------------User will Get Country Data -----------------*/
Route::get('/country_data', [ApiController::class, 'CountryData']);
/*-----------------Continue with email -----------------*/
Route::post('/continue_email', [ApiController::class, 'continue_email']);
/*-----------------Get Catgeories -----------------*/
Route::post('/get_categories', [ApiController::class, 'get_categories']);
/*-----------------Get Reviews -----------------*/
Route::post('/get_reviews', [ApiController::class, 'get_reviews']);
/*-----------------Add Reviews -----------------*/
Route::post('/add_reviews', [ApiController::class, 'add_reviews']);
/*-----------------View Single Profile -----------------*/
Route::post('/view_single_profile', [ApiController::class, 'view_single_profile']);
/*-----------------Add Favourites-----------------*/
Route::post('/add_favourites', [ApiController::class, 'add_favourites']);
/*-----------------Delete Favourites-----------------*/
Route::post('/delete_favourites', [ApiController::class, 'delete_favourites']);