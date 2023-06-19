<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{
    use HasFactory;
    protected $table = 'choices'; // กำหนดชื่อตารางในฐานข้อมูล
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'question_id',
        'choice',
    ];
}
