<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
use App\ProfessorRating;
use App\User; // check if legit user tries to add rating

class ProfessorRatingController extends Controller
{
    public function validateData($request)
    {
        $request->validate([
            'professor_id' => 'required|integer',
            'user_id' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|min:10|max:500'
        ]);
    }
    public function delete(Request $request)
    {
        // $this->validateData($request);
        $deleteRating = ProfessorRating::where(
            ['professor_id' => $request->professor_id, 'user_id' => $request->user_id]
        )->delete();
        return response()->json([$request->all()], 200);
    }
    public function validateUser($user_id)
    {
        $user_token = Cookie::get('token');
        $user = User::where('token', $user_token)->where('uuid', $user_id)->first();
        return $user;
    }
    public function store(Request $request)
    {
        $isValidUser = $this->validateUser($request->user_id);
        if(!$isValidUser) {
            return response()->json(['status' => 'bad user'], 403);
        }
        $this->validateData($request);
        $updateOrInsert = ProfessorRating::updateOrInsert(
            ['professor_id' => $request->professor_id, 'user_id' => $request->user_id],
            ['rating' => $request->rating, 'comment' => $request->comment]
        );
        return response()->json(['answer' => $updateOrInsert], 200);
    }
}
