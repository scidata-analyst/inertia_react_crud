<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;
use App\Models\User;

class HotelSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();

        if ($users->count() == 0) {
            $users = User::factory(5)->create();
        }

        $users->each(function ($user) {
            Hotel::factory(20)->create([
                'user_id' => $user->id,
            ]);
        });
    }
}
