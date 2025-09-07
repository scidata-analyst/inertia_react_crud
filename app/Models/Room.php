<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'hotel_id',
        'name',
        'room_type',
        'capacity',
        'price',
        'description',
        'image',
        'is_available',
    ];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
}
