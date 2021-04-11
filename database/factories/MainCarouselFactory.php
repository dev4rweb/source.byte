<?php

namespace Database\Factories;

use App\Models\MainCarousel;
use Illuminate\Database\Eloquent\Factories\Factory;

class MainCarouselFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MainCarousel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Source Byte',
            'content' => 'Got a game? Need a publisher? What are you waiting for?',
            'image'=> base_path('images/home-main-image.png'),
            'btnText' => 'Visit a site',
            'btnUrl' => '/'
        ];
    }
}
