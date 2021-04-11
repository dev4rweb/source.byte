<?php

namespace Database\Factories;

use App\Models\SecondCarousel;
use Illuminate\Database\Eloquent\Factories\Factory;

class SecondCarouselFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SecondCarousel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Source Byte',
            'content' => 'It was a nice calm day, but from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests …',
            'image'=> base_path('images/simulator.png'),
            'btnText' => 'Visit a site',
            'btnUrl' => '/'
        ];
    }
}
