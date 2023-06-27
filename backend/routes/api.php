<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnsController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\SolveController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('questions',QuestionController::class);
// question & choice
Route::resource('ans',AnsController::class);
Route::resource('delete',DataController::class);
// ans user
Route::resource('solve',SolveController::class);
//Solve
