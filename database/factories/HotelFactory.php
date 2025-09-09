<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    public function definition(): array
    {
        $name = $this->faker->company . ' Hotel';
        return [
            'user_id' => User::factory(),
            'name' => $name,
            'slug' => Str::slug($name) . '-' . Str::random(5),
            'description' => $this->faker->paragraph(),
            'address' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'state' => $this->faker->state(),
            'country' => $this->faker->country(),
            'zip_code' => $this->faker->postcode(),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
            'rating' => $this->faker->randomFloat(1, 0, 5),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'image' => "https://picsum.photos/600/400?3",
        ];
    }
}
