<?php

namespace App\Http\Controllers;

use App\Models\Solve;
use App\Models\Question;
use Illuminate\Http\Request;

class SolveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $solves = Question::leftJoin('solves', 'questions.id', '=', 'solves.question_id')
        ->select('questions.*', 'solves.id', 'solves.ans1', 'solves.ans2', 'solves.ans3', 'solves.ans4')
        ->get()
        ->groupBy('question_id')
        ->map(function ($items) {
            $question = $items->first();
            $ans = $items->map(function ($item) {
                return [
                    'id' => $item->id,
                    'ans1' => $item->ans1,
                    'ans2' => $item->ans2,
                    'ans3' => $item->ans3,
                    'ans4' => $item->ans4,
                ];
            });
    
            return [
                'question_id' => $question->question_id,
                'question' => $question->question,
                'sub_question' => $question->sub_question,
                'ans' => $ans,
            ];
        })
        ->values();


        return response()->json($solves);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Solve $solve)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Solve $solve)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Solve $solve)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Solve $solve)
    {
        //
    }
}
