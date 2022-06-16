<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});



Route::get('/getsurveys', [SurveyController::class, 'getSurveys']);
Route::post('/getsurvey', [SurveyController::class, 'getSurveyById']);

Route::group(['prefix'=>'user'], function(){

    
});

Route::group(['prefix'=>'admin'], function(){
    Route::post('/addsurvey', [SurveyController::class, 'addSurvey']);
    Route::post('/addquestion', [QuestionController::class, 'addQuestion']);
});