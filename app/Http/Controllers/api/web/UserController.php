<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Token;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use \Firebase\JWT\JWT;

class UserController extends Controller
{
  private function uuid() {
    return config('app.uuid');
  }
  private function tokenKey() {
    return config('app.tokenKey');
  }
  private function verifyPhone($phone) {
    $isAllNumeric = ctype_digit($phone_number);
    return substr($phone_number, 0,2) == '77' && strlen($phone_number) == 11 && $isAllNumeric;
  }
  private function generateSMS() {
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
  }
  private function ifUserExists($phone) {
    $users = User::get();
    $combined = $phone.$this->uuid();
    foreach ($users as $user) {
      if(Hash::check($combined, $user->uuid)) {
        return true;
      }
    }
    return false;
  }
  private function store() {

  }
  private function update() {

  }
  public function create(Request $request) {
    $phone = $request->phone;
    if ($this->verifyPhone($phone)) {
      //generate sms, save to db and send sms
      $sms = $this->generateSMS();
      if ($this->ifUserExists($phone)) {
        return $this->update($phone, $sms);
      } else {
        return $this->store();
      }

    } else {
      return response()->json(['status_code'=>1, 'msg' => 'bad phone'], 403);
    }
  }
}