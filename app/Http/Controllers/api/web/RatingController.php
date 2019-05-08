<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
use App\User; // check if legit user tries to add rating
use App\Rating;
use Validator;

class RatingController extends Controller
{
  public function validateData($request) {
    $entity = $request->entity == 0 ? "universities" : "professors";
    $isDataValid = Validator::make($request->all(), [
      'user_id' => 'required|string|exists:users,uuid',
      'rating' => 'required|integer|min:1|max:5',
      'comment' => 'required|string|min:10|max:500',
      'entity' => 'required|integer|min:0|max:1',
      'entity_id' => "required|integer|exists:{$entity},id"
    ]);
    return $isDataValid;
  }
  public function validateUser($user_id) {
    $user_token = Cookie::get('token');
    $user = User::where('token', $user_token)->where('uuid', $user_id)->first();
    return $user;
  }
  public function store(Request $request) {
    $dataValidator = $this->validateData($request);
    if($dataValidator->fails()){
      return response()->json(['status' => 'bad business, hombre'], 422);
    } else{
      $userValidator = $this->validateUser($request->user_id);
      if(!$userValidator) {
        return response()->json(['status' => 'bad user'], 400);
      } else {
        $updateOrInsert = Rating::updateOrInsert(
          ['entity' => $request->entity,'entity_id' => $request->entity_id, 'user_id' => $request->user_id],
          ['rating' => $request->rating, 'comment' => $request->comment]
        );
        return response()->json(['status' => 'success'], 200);
      }
    }
  }
}