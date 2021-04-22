<?php

namespace Database\Factories;

use App\Models\FooterLinks;
use Illuminate\Database\Eloquent\Factories\Factory;

class FooterLinksFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FooterLinks::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'steam' => 'https://source-byte.com/',
            'xBox' => 'https://source-byte.com/',
            'playstation' => 'https://source-byte.com/',
            'twitch' => 'https://source-byte.com/',
            'microsoft' => 'https://source-byte.com/',
            'viveport' => 'https://source-byte.com/',
            'nintendo' => 'https://source-byte.com/',
            'oculus' => 'https://source-byte.com/',
            'gog' => 'https://source-byte.com/',
            'epic' => 'https://source-byte.com/',
            'itch' => 'https://source-byte.com/',
        ];
    }
}
