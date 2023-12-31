<?php

use App\Http\Controllers\AnsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/index', [AnsController::class, 'index'])->name('aa');
Route::get('/test/{id}', [AnsController::class, 'calScore'])->name('test');
Route::get('/testAdd', [AnsController::class, 'store'])->name('ss');
