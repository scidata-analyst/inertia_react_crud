<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Room;
use App\Models\Hotel;

class RoomSeeder extends Seeder
{
    public function run(): void
    {
        $hotels = Hotel::all();

        if ($hotels->count() == 0) {
            $hotels = Hotel::factory(5)->create();
        }

        // Add rooms to each hotel
        $hotels->each(function ($hotel) {
            Room::factory(500)->create([
                'hotel_id' => $hotel->id,
            ]);
        });
    }
}
