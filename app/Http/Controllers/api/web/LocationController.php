<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Torann\GeoIP\Facades\GeoIP;

class LocationController extends Controller
{
    public function index()
    {
        $location = GeoIP::getLocation('64.233.191.128');
        return response()->json($location);
    }
}
