<?php

namespace Database\Factories;

use App\Models\GamesRequirements;
use Illuminate\Database\Eloquent\Factories\Factory;

class GamesRequirementsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GamesRequirements::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'gameId' => '1',
            'minMax' => 'min',
            'OS'=> 'Windows 7',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '4 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ];
    }
}
