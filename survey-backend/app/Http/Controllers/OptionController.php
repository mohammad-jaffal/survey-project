<?php

namespace App\Http\Controllers;
use App\Models\Option;


use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function addOption(Request $request){
        $option = new Option;
        $option->option = $request->option;
        $option->question_id = $request->question_id;
        $option->save();
           
        return response()->json([
            "success" => true,
        ], 200);
    }
}
