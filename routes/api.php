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
//Location
Route::get('/web/v1/location', 'api\web\LocationController@index');


//Universities
Route::get('/web/v1/university', 'api\web\UniversityController@index');
Route::get('/web/v1/universities/{city_id}', 'api\web\UniversityController@getUniversitiesOfCity');
Route::get('/web/v1/university/{university_id}', 'api\web\UniversityController@getUniversity');
//University Rating
Route::post('/web/v1/university', 'api\web\RatingController@store')->middleware('throttle:2,0.1'); // update or insert rating
Route::delete('/web/v1/university', 'api\web\RatingController@delete'); // delete rating

//Professors
Route::get('/web/v1/professor', 'api\web\ProfessorController@index');
Route::get('/web/v1/professor/{professor_id}', 'api\web\ProfessorController@getProfessor');
Route::get('/web/v1/professor/autosuggest/{professor_name}', 'api\web\ProfessorController@autoSuggestProfessor');
//Professor Rating
Route::post('/web/v1/professor', 'api\web\RatingController@store')->middleware('throttle:2,0.1'); // update or insert rating
Route::delete('/web/v1/professor', 'api\web\RatingController@delete'); // delete rating

//Posts
Route::get('/web/v1/post', 'api\web\PostController@index');
Route::get('/web/v1/post/{post_id}', 'api\web\PostController@getPost');


//Professor ratings
Route::get('/web/v1/professor_rating', 'api\web\ProfessorRatingController@index');
Route::get('/web/v1/professor_rating/{professor_id}/{user_id?}', 'api\web\ProfessorRatingController@getRatings');


//Users
// Route::get('/web/v1/user', 'api\web\UserController@index');
Route::get('/web/v1/user/{phone_number}', 'api\web\UserController@getUser');
//5 attempts in 5 min
Route::post('/web/v1/user', 'api\web\UserController@create')->middleware('throttle:5,5'); // -> authorization logic here
Route::post('/web/v1/user/code', 'api\web\UserController@verifySms'); // -> verify sms code
// check if user token exists in db
Route::post('/web/v1/user/token', 'api\web\UserController@checkToken');


//Cities
Route::get('/web/v1/city', 'api\web\CityController@index');
//Cities and their universities
Route::get('/web/v1/cities', 'api\web\CityController@getAll');

//Blog posts
Route::get('/web/v1/blog', 'api\web\PostController@index');


//TEST ROUTE
Route::post('/test', 'api\web\RatingController@store');