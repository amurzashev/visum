<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\University;
use App\City;
use App\Professor;
use App\User;
use App\Rating;
use Illuminate\Support\Facades\Cookie;

class UniversityController extends Controller
{
    public function getUniversityRatings($university_id)
    {
        $user_token = Cookie::get('token');
        // $user = User::where('token', $user_token)->first();
        $user = null;
        $ratings = null;
        $user_rating = null;
        if($user == null) {
            $ratings = Rating::
                select('rating', 'comment', 'updated_at', 'created_at')->
                where('entity_id', $university_id)->
                where('entity', 0)->
                orderBy('updated_at', 'desc')->
                get()->toArray();
        } else {
            $user_rating = Rating::
            select('entity_id', 'uuid', 'rating', 'comment', 'updated_at', 'created_at')->
            where('entity', 0)->
            where('entity_id', $university_id)
            ->where('uuid', $user->uuid)
            ->first();
            $ratings = Rating::
                select('rating', 'comment', 'updated_at', 'created_at')->
                where('entity', 0)->
                where('entity_id', $university_id)->
                where('uuid', '!=', $user->uuid)->
                orderBy('updated_at', 'desc')->
                get()->toArray();
        }
        if ($user_rating != null) {
            array_unshift($ratings, $user_rating);
        }
        $ratings = array_slice($ratings, 0, 20);
        foreach ($ratings as $key => $value) {
            foreach($value as $k => $v) {
                unset($value["{$k}"]);
            }
        }
        return $ratings;
    }
    public function index()
    {
        $universities = University::get();
        return response()->json(['universities'=>$universities]);
    }
    public function getUniversitiesOfCity($city_id)
    {
        $university = University::where('city_id', $city_id)->get();
        return response()->json(['university'=>$university]);
    }
    public function getUniversity($university_id)
    {
        $university = University::where('id', $university_id)->first();
        if ($university == null) {
            return response()->json(['response' => 'no record found'], 404);
        }
        $city = City::where('id', $university->city_id)->value('name');
        $professors = Professor::where('university_id', $university->id)->orderBy('name', 'ASC')->get();
        $ratings = $this->getUniversityRatings($university_id);
        $university->city = $city;
        unset($university->city_id, $university->image);
        foreach ($professors as $p) {
            unset($p->university_id);
        }
        return response()->json(['info'=>$university, 'professors'=>$professors, 'ratings'=>$ratings]);
    }
}
