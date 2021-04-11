<?php

namespace Database\Factories;

use App\Models\HomePage;
use Illuminate\Database\Eloquent\Factories\Factory;

class HomePageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = HomePage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Home Page',
            'content' => 'Content',
            'underText' => 'Do you want to see more games',
            'btnText' => 'visit a site',
            'btnUrl' => 'http://source-byte.zzz.com.ua/'
        ];
    }
}
