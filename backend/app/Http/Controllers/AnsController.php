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
        ->leftJoin('questions', 'ans.question_id', '=', 'questions.questions_id')
        ->select('ans.*','questions.type_language')
        ->where('user_id', $id)
        ->orderBy('ans.question_id', 'asc')
        ->get();
        $item = $data1->first();
        $type_language = $item->type_language;

        $data2 = DB::table('solves')
            ->leftJoin('questions', 'solves.question_id', '=', 'questions.questions_id')
            // ->select('questions.*', 'solves.question_id','solves.ans1','solves.ans2','solves.ans3','solves.ans4')
            ->select('solves.*')
            ->where('questions.type_language', $type_language)
            ->orderBy('solves.question_id', 'asc')
            ->get();


        $idArray = [];
        foreach ($data1 as $item) {
            $idArray[] = $item->question_id;
        }
  
        $resultArray = [];

        foreach ($data2 as $row) {
            if (in_array($row->question_id, $idArray)) {
                $ansArray = [];
                if ($row->ans1 !== null && $row->ans1 !== "") {
                    $ansArray[] = $row->ans1;
                }
                if ($row->ans2 !== null && $row->ans2 !== "") {
                    $ansArray[] = $row->ans2;
                }
                if ($row->ans3 !== null && $row->ans3 !== "") {
                    $ansArray[] = $row->ans3;
                }
                if ($row->ans4 !== null && $row->ans4 !== "") {
                    $ansArray[] = $row->ans4;
                }
                
                $resultArray[] = $ansArray;
            }
        }
       
        
// dd($resultArray,$idArray);
        
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
// dd($a,$b);

        $k = '*****w';
        $test = [];

        for ($i = 0; $i < count($a); $i++) {
            $bNoSpaces = str_replace(' ', '', $b[$i]);
            $aNoSpaces = str_replace(' ', '', $a[$i]);
            
            if (in_array($bNoSpaces, $aNoSpaces)) {
                if (in_array($k, $aNoSpaces)) {
                    if ($bNoSpaces != $k) {
                        $score++;
                        array_push($test,1);
                    }
                    else{
                        array_push($test,0);
                    }
                } else {
                    $score++;
                    array_push($test,1);
                    $k = $bNoSpaces;

                }
            }else{
                array_push($test,0);
            }
        }

        $score = 0;
        $answeredQuestions = [];
        
        foreach ($test as $key => $value) {
            $questionId = $idArray[$key];
        
            if (!in_array($questionId, $answeredQuestions)) {
                $answeredQuestions[] = $questionId;
                $totalAnswers = count(array_filter($idArray, function ($id) use ($questionId) {
                    return $id === $questionId;
                }));
        
                $correctAnswers = 0;
                for ($i = $key; $i < $key + $totalAnswers; $i++) {
                    if ($test[$i] === 1) {
                        $correctAnswers++;
                    }
                }
        
                $score += $correctAnswers / $totalAnswers;
            }
        }
        
        // dd($score);
//    dd($data1,$data2);     


        User::where('id', $id)
        ->update(['score' => $score]);

// dd($a);

    }

    public function store(Request $request)
    {
        // dd($request);

        $data2 = DB::table('solves')
        ->select('solves.question_id')
        ->orderBy('solves.question_id', 'asc')
        ->get();
    
        $countedData = $data2->groupBy('question_id')
            ->map(function ($group) {
                return count($group);
            })
            ->toArray();
        

        $user = new User();
        $user->name = $request->input('username');
        $user->email = $request->input('email');
        // $user->password = $request->input('password');
        $user->save();

        $questions = $request->input('questions');

        foreach ($questions as $question) {
            $questionId = $question['question_id'];
            $ans = $question['ans'];

            foreach ($countedData as $question_id => $count) {
                if ($questionId == $question_id) {
                    for($i=0;$i<$count;$i++){
                        $ansTable = new Ans;
                        $ansTable->question_id = $questionId;
                        $ansTable->ans = $ans[$i];
                        $ansTable->user_id = $user->id;
                        $ansTable->save();
                    }
                }

            }
        }

        $this->calScore($user->id);
        

        return response()->json(['message' => 'Answers created successfully']);

    }

    public function destroy(Request $id)
    {
        $id = 1; // ระบุ ID ที่ต้องการลบ

        Ans::where('user_id', $id)->delete(); // ModelName เป็นชื่อของโมเดลที่คุณต้องการลบข้อมูล

        return response()->json(['message' => 'Answers created successfully']);

    }


}