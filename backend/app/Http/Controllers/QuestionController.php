<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Choice;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {

        $questions = Question::leftJoin('choices', 'questions.id', '=', 'choices.question_id')
        ->select('questions.*', 'choices.id', 'choices.choice')
        ->get()
        ->groupBy('question_id')
        ->map(function ($items) {
            $question = $items->first();
            $choices = $items->map(function ($item) {
                return [
                    'id' => $item->id,
                    'choice' => $item->choice,
                ];
            });
    
            return [
                'question_id' => $question->question_id,
                'question' => $question->question,
                'sub_question' => $question->sub_question,
                'choices' => $choices,
            ];
        })
        ->values();


        return response()->json($questions);

    }


    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required',
            'type_language' => 'required',
            'question' => 'required',
            'sub_question' => 'required',
        ]);
    
        $question = new Question;
        $question->type = $request->input('type');
        $question->type_language = $request->input('type_language');
        $question->question = $request->input('question');
        $question->sub_question = $request->input('sub_question');
        $question->save();
        return response()->json([
            'message' =>' Question added successfully'
          ]);
    
        // return response()->json([
        //     'message' => $request->input('type').$request->input('choices.0')
        //   ]);
          
    }

   
    public function show(Question $question)
    {
        //
    }

    public function edit(Question $question)
    {
        //
    }

    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
