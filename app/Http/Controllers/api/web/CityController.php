<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\City;
use App\University;

class CityController extends Controller
{
    public function getAll()
    {
        $universities = University::get();
        $cities = City::get();
        foreach($cities as $city) {
            $unis = array();
            foreach($universities as $university){
                if($university->city_id == $city->id) {
                    array_push($unis, $university);
                    unset($university->image, $university->city_id);
                }
            }
            $city->universities = $unis;
        }
        return response()->json(['cities'=>$cities]);
    }
}
