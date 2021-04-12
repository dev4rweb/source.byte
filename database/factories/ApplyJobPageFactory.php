<?php

namespace Database\Factories;

use App\Models\ApplyJobPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplyJobPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ApplyJobPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Submit Page',
            'content' => 'Submit Content',
            'image'=> 'https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'
        ];
    }
}
