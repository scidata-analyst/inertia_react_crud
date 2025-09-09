<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
        'room_id',
        'check_in',
        'check_out',
        'status',
        'payment_status',
        'payment_method',
        'cost',
    ];
}
