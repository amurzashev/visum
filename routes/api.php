<?php

use Illuminate\Http\Request;
use ReallySimpleJWT\Token;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
    WEB API
*/


//Universities
Route::get('/web/v1/university', 'api\web\UniversityController@index');
Route::get('/web/v1/university/{university_id}', 'api\web\UniversityController@getUniversity');
//University Rating
Route::post('/web/v1/university', 'api\web\RatingController@store')->middleware('throttle:2,0.1'); // update or insert rating
Route::delete('/web/v1/university', 'api\web\RatingController@delete'); // delete rating

//Professors
Route::get('/web/v1/professor', 'api\web\ProfessorController@index');
Route::get('/web/v1/professor/{professor_id}', 'api\web\ProfessorController@getProfessor');

//Professor Rating
Route::post('/web/v1/professor', 'api\web\RatingController@store')->middleware('throttle:2,0.1'); // update or insert rating
Route::delete('/web/v1/professor', 'api\web\RatingController@delete'); // delete rating

//Users
Route::post('/web/v1/user', 'api\web\UserController@create')->middleware('throttle:5,5'); // -> authorization logic here
Route::post('/web/v1/user/code', 'api\web\UserController@verifySms'); // -> verify sms code
// check if user token exists in db
Route::post('/web/v1/user/token', 'api\web\UserController@checkToken');

//Cities and its universities
Route::get('/web/v1/cities', 'api\web\CityController@getAll');