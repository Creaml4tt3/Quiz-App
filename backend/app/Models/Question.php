<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions'; // กำหนดชื่อตารางในฐานข้อมูล
    protected $primaryKey = 'questions_id';

    protected $fillable = ['type','type_language','question','sub_question'];
}
