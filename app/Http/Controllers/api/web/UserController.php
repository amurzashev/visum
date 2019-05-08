<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\User;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class UserController extends Controller
{
    public function index()
    {
        $users = User::get();
        return response()->json(['users'=>$users]);
    }
    public function create(Request $request)
    {
        $phone_number = $request->phone;
        $isPhoneNumberCorrect = $this->checkPhoneNumber($phone_number);
        if($isPhoneNumberCorrect){
            return $this->sendSmsCode($phone_number);
        }
        return response()->json(['status_code'=>1, 'phone'=> $phone_number], 403);
    }
    public function randomString($length)
    {
        $characters = '0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    public function sendSmsCode($phone_number)
    {
        /*
            json_decode($result->getBody()) -> .json() of response
        */
        $client = new Client();
        $mobizonToken = config('app.mobizonAPI');
        $code = $this->randomString(6);
        $mobizonMessage = urlencode('Код: '.$code.' Активация VISUM ');
        if (App::environment(['local', 'staging'])) {
            $fakeSms = true;
            if($fakeSms){
                $doesUserExist = $this->doesUserExist($phone_number);
                if($doesUserExist){
                    return $this->updateUserSms($phone_number, $code);
                } else {
                    return $this->createNewUser($phone_number, $code);
                }
            }else{
                return response()->json(['status_code'=>2], 403);
            }
        } else {
        $response = $client->get(
            'https://api.mobizon.kz/service/message/sendsmsmessage?recipient='
            .$phone_number.'&text='.$mobizonMessage.'&apiKey='.$mobizonToken
        );
        $responseAnswer = json_decode($response->getBody());
        }
        if($responseAnswer->code == 0){
            $doesUserExist = $this->doesUserExist($phone_number);
            if($doesUserExist){
                return $this->updateUserSms($phone_number, $code);
            } else {
                return $this->createNewUser($phone_number, $code);
            }
        }else{
            return response()->json(['status_code'=>2], 403);
        }
    }
    public function checkPhoneNumber($phone_number)
    {
        $isAllNumeric = ctype_digit($phone_number);
        if(substr($phone_number, 0,2) == '77' && strlen($phone_number) == 11 && $isAllNumeric){
            return true;
        }
        return false;
    }
    public function doesUserExist($phone_number)
    {
        $phone_number_with_plus = '+'.$phone_number;
        $user = User::where('phone', $phone_number_with_plus)->exists();
        return $user;
    }
    public function createNewUser($phone_number, $code)
    {
        $user = new User;
        $user->phone = '+'.$phone_number;
        $user->uuid = Hash::make($phone_number);
        $user->sms = $code;
        $user->token = Hash::make($phone_number.'abc');
        $user->save();
        return response()->json(['status_message', 'user created'], 200);
    }
    public function updateUserSms($phone_number, $code)
    {
        $phone_number_with_plus = '+'.$phone_number;
        // DISABLED: token update
        // $user = User::where('phone', $phone_number_with_plus)->update(['sms'=>$code, 'token'=>Hash::make($phone_number.'xyz')]);
        // TEMP SOLUTION: not updating token after log in :(
        $user = User::where('phone', $phone_number_with_plus)->update(['sms'=>$code]);
        return response()->json(['status_message' => 'user record updated'], 200);
    }
    public function checkToken(Request $request)
    {
        $user = User::where('token', $request->token)->first();
        if (!$user) {
            return response()->json(['status'=>'incorrect token'], 403);
        }
        return response()->json($user, 200);
    }
    public function verifySms(Request $request)
    {
        $phone_number_with_plus = '+'.$request->phone;
        $user = User::where('sms', $request->code)->where('phone', $phone_number_with_plus)->first();
        if(!$user){
            return response()->json(['status_message'=>'record not found'], 403);
        }
        return response()->json(['token'=>$user->token, 'id'=>$user->uuid], 200);
    }
}