<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'description',
        'address',
        'city',
        'state',
        'country',
        'zip_code',
        'phone',
        'email',
        'rating',
        'latitude',
        'longitude',
        'image',
    ];
}
