<?php

namespace App\Http\Controllers;
use App\Models\Type;

use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function getTypes(){
        $types = Type::all();
        return response()->json([
            "success" => true,
            "types" => $types
        ], 200);
    }

    public function addType(Request $request){
        $type = new Type;
        $type->type = $request->type;
        $type->save();
           
        return response()->json([
            "success" => true,
        ], 200);
    }
}
