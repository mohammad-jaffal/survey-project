<?php


namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Survey;
use Illuminate\Http\Request;

class QuestionController extends Controller{

    public function addQuestion(Request $request){
        $question = new Question;
        $question->question = $request->question;
        $question->survey_id = $request->survey_id;
        $question->type_id = $request->type_id;
        $question->save();
           
        return response()->json([
            "success" => true,
        ], 200);
    }

    public function getQuestionsBySurveyId(Request $request){
        $id = $request->survey_id;
        // $questions = Survey::find($id);
        $questions = Question::where('survey_id', $id)->get();
       
        return response()->json([
            "success" => true,
            "questions" => $questions
        ], 200);
    }
}
