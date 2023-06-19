<?php

namespace App\Http\Controllers;

use App\Models\Ans;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Validation\Validator;

class DataController extends Controller
{

    public function store(Request $id)
    {
        $id = 1; // ระบุ ID ที่ต้องการลบ

        Ans::where('user_id', $id)->delete(); // ModelName เป็นชื่อของโมเดลที่คุณต้องการลบข้อมูล

        return response()->json(['message' => 'Answers created successfully']);
        
    }


}
