<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
class ExperimentalController extends Controller
{
    public function index()
    {
        return response()->json(['token'=>Cookie::get('token')], 200);
    }
}
