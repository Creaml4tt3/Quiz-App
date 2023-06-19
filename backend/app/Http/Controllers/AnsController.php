<?php

namespace App\Http\Controllers;

use App\Models\Ans;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// use Illuminate\Validation\Validator;

class AnsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $datauser = Ans::leftJoin('users', 'ans.user_id', '=', 'users.id')
        ->select('ans.*', 'users.id as user_id','users.name','users.email','users.score')
        ->get()
        ->groupBy('user_id')
        ->map(function ($items) {
            $data = $items->first();
            $ans = $items->map(function ($item) {
                return [
                    'question_id' => $item->question_id,
                    'ans' => $item->ans,
                ];
            });
    
            return [
                'user_id' => $data->user_id,
                'name' => $data->name,
                'email' => $data->email,
                'score' => $data->score,
                'anss' => $ans,
            ];
        })
        ->values();


        return response()->json($datauser);


        
        
    }

    function calScore($id){

        $data1 = DB::table('ans')
            ->select('ans.*')
            ->where('user_id', $id)
            ->get();

        $data2 = DB::table('solves')
            ->leftJoin('questions', 'solves.question_id', '=', 'questions.id')
            ->select('questions.*', 'solves.question_id','solves.ans1','solves.ans2','solves.ans3','solves.ans4')
            // ->groupBy('choice.question_id')
            ->get();

        
        $resultArray = [];

        foreach ($data2 as $row) {
            $resultArray[] = [
                $row->ans1,
                $row->ans2,
                $row->ans3,
                $row->ans4,
            ];
        }
        $filteredArray = array_map(function($row) {
            return array_values(array_filter($row, function($value) {
                return !is_null($value);
            }));
        }, $resultArray);

//ans
        $ansArray = [];
        foreach ($data1 as $item) {
            $ansArray[] = $item->ans;
        }

        $score = 0;


        $a = $filteredArray;
        $b = $ansArray;


        $k = '';
        for ($i=0; $i<count($a); $i++){
            if(in_array($b[$i], $a[$i])){    
                if(in_array($k, $a[$i])){
                    if($b[$i]!=$k){
                        $score++; 
                    }
                }
                else{
                    $score++; 
                    $k = $b[$i];
                }
            }

        }
        


        User::where('id', $id)
        ->update(['score' => $score]);


    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required', 
            'email' => 'required',
            // 'password' => 'required|min:8|confirmed',
            'questions' => 'required',
            // 'ans' => 'required',
        ]);

        $users = new User();
        $users->name = $request->input('name');
        $users->email = $request->input('email');
        $users->password = $request->input('password');

        $users->save();

        $questions = $request->input('questions');

        foreach ($questions as $question) {
            $questionId = $question['question_id'];
            $ans = $question['ans'];
    
            foreach ($ans as $answer) {
                $ansTable = new Ans;
                $ansTable->question_id = $questionId;
                // $answer = str_replace(" ", "", $answer);
                $ansTable->ans = $answer;
                $ansTable->user_id = $users->id;
                $ansTable->save();
            }
        }
        $this->calScore($users->id);
         
        return response()->json(['message' => 'Answers created successfully']);
    }

    public function destroy(Request $id)
    {
        $id = 1; // ระบุ ID ที่ต้องการลบ

        Ans::where('user_id', $id)->delete(); // ModelName เป็นชื่อของโมเดลที่คุณต้องการลบข้อมูล

        return response()->json(['message' => 'Answers created successfully']);
        
    }


}