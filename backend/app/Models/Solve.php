<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solve extends Model
{
    use HasFactory;
    protected $table = 'solves'; // กำหนดชื่อตารางในฐานข้อมูล
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'question_id',
        'ans1',
        'ans2',
        'ans3',
        'ans4',
    ];
}
