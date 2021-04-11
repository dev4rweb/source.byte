<?php

namespace Database\Factories;

use App\Models\Socials;
use Illuminate\Database\Eloquent\Factories\Factory;

class SocialsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Socials::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category' => 'Follow',
            'name' => 'youtube',
            'url'=> 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ];
    }
}
