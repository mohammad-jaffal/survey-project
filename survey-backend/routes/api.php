<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\AnswerController;



Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});



Route::get('/getsurveys', [SurveyController::class, 'getSurveys']);
Route::post('/getsurvey', [SurveyController::class, 'getSurveyById']);

Route::post('/getquestions', [QuestionController::class, 'getQuestionsBySurveyId']);

Route::get('/gettypes', [TypeController::class, 'getTypes']);

Route::post('/getoptions', [OptionController::class, 'getOptionsByQuestionId']);

Route::post('/addanswer', [AnswerController::class, 'addAnswer']);


Route::group(['prefix'=>'admin'], function(){
    Route::post('/addsurvey', [SurveyController::class, 'addSurvey']);
    Route::post('/addquestion', [QuestionController::class, 'addQuestion']);
    Route::post('/addtype', [TypeController::class, 'addType']);
    Route::post('/addoption', [OptionController::class, 'addOption']);
    Route::post('/getanswers', [AnswerController::class, 'getAnswersByQuestionId']);

});