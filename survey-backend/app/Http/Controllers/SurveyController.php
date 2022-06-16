<?php

namespace App\Http\Controllers;
use App\Models\Survey;


use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function getSurveys(){
        $surveys = Survey::all();
        return response()->json([
            "success" => true,
            "surveys" => $surveys
        ], 200);
    }


    public function getSurveyById(Request $request){
        $id = $request->Survey_id;
        $survey = Survey::find($id);
       
        return response()->json([
            "success" => true,
            "survey" => $survey
        ], 200);
    }


    public function addSurvey(Request $request){
        $survey = new Survey;
        $survey->title = $request->title;
        $survey->save();
           
        return response()->json([
            "success" => true,
        ], 200);
    }


}
