<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $fillable = [
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
