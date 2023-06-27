<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ans extends Model
{
    use HasFactory;
    protected $table = 'ans'; // กำหนดชื่อตารางในฐานข้อมูล
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'user_id',
        'question_id',
        'ans',
    ];
}
