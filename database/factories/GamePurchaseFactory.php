<?php

namespace Database\Factories;

use App\Models\GamePurchase;
use Illuminate\Database\Eloquent\Factories\Factory;

class GamePurchaseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GamePurchase::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'gameId'=> '1',
            'price' => '$19.99',
            'xBox' => 'https://source-byte.com/',
            'ps' => 'https://source-byte.com/',
            'microsoft' => 'https://source-byte.com/',
            'steam' => 'https://source-byte.com/',
            'released' => '1/12/16',
            'publisher' => 'Xion Studios',
            'rating' => 'ESRB',
            'fileSize' => '6.8 GB',
            'main_link' => 'https://source-byte.com/'
        ];
    }
}
