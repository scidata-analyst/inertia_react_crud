<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Hotel;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    public function definition(): array
    {
        return [
            'hotel_id' => Hotel::factory(),
            'name' => 'Room ' . $this->faker->numberBetween(100, 999),
            'room_type' => $this->faker->randomElement(['Single', 'Double', 'Suite', 'Deluxe','Luxury','Family','Apartments','Villa','Cabin','Resorts']),
            'capacity' => $this->faker->numberBetween(1, 6),
            'price' => $this->faker->randomFloat(2, 50, 1000),
            'description' => $this->faker->paragraph(),
            'image' => "https://picsum.photos/600/400?3",
            'is_available' => $this->faker->boolean(),
        ];
    }
}
