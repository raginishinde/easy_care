<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use DataTables;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Redirect;
use Response;
use Session;
use Validator;

class AdminController extends Controller
{
    public function admin()
    {
        return view('login');
    }
    public function dashboard()
    {
        return view('admin.dashboard');
    }
}
