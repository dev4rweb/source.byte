<?php

namespace Database\Factories;

use App\Models\GameCarousel;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameCarouselFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GameCarousel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'gameId' => '1',
            'image'=> base_path('images/simulator.png'),
        ];
    }
}
