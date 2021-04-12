<?php

namespace Database\Factories;

use App\Models\PressPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class PressPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PressPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Press Page',
            'content' => 'Press Content',
            'image'=> 'https://cdn.pixabay.com/photo/2020/03/24/22/34/illustration-4965674_960_720.jpg'
        ];
    }
}
