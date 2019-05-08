<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Professor;
use App\User;
use App\University;
use App\Rating;
use Illuminate\Support\Facades\Cookie;

class ProfessorController extends Controller
{
    public function index()
    {
        $professors = Professor::orderBy('name', 'DESC')->get();
        return response()->json(['professors'=>$professors]);
    }
    public function getProfessorRatings($professor_id)
    {
        $user_token = Cookie::get('token');
        $user = User::where('token', $user_token)->first();
        $ratings = null;
        $user_rating = null;
        if($user == null) {
            $ratings = Rating::
                select('rating', 'comment', 'updated_at', 'created_at')->
                where('entity_id', $professor_id)->
                where('entity', 1)->
                orderBy('updated_at', 'desc')->
                get()->toArray();
        } else {
            $user_rating = Rating::
            select('user_id', 'rating', 'comment', 'updated_at', 'created_at')->
            where('entity', 1)->
            where('entity_id', $professor_id)->
            where('user_id', $user->uuid)->
            first();
            $ratings = Rating::
                select('rating', 'comment', 'updated_at', 'created_at')->
                where('entity_id', $professor_id)->
                where('entity', 1)->
                where('user_id', '!=', $user->uuid)->
                orderBy('updated_at', 'desc')->
                get()->toArray();
        }
        if ($user_rating != null) {
            array_unshift($ratings, $user_rating);
        }
        $ratings = array_slice($ratings, 0, 20);
        return $ratings;
    }
    public function getProfessor($professor_id)
    {
        $professor = Professor::where('id', $professor_id)->first();
        if ($professor == null) {
            return response()->json(['response' => 'no record found'], 404);
        }
        $university = University::where('id', $professor->university_id)->value('name');
        $ratings = $this->getProfessorRatings($professor_id);
        $professor->university = $university;
        return response()->json(['info'=>$professor, 'ratings'=>$ratings]);
    }
    public function autoSuggestProfessor($professor_name)
    {
        $professors = Professor::where('name', 'like', '%'.$professor_name.'%')->get();
        return response()->json(['professors'=>$professors]);
    }
}
