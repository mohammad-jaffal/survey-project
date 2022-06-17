<?php

namespace App\Http\Controllers;
use App\Models\Answer;


use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function addAnswer(Request $request){
        $answer = new Answer;
        $answer->answer = $request->answer;
        $answer->question_id = $request->question_id;
        $answer->save();
           
        return response()->json([
            "success" => true,
        ], 200);
    }


    public function getAnswersByQuestionId(Request $request){
        $id = $request->question_id;
        $answers = Answer::where('question_id', $id)->get();
        
        return response()->json([
            "success" => true,
            "answers" => $answers
        ], 200);
    }


}
