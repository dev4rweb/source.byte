<?php

namespace Database\Factories;

use App\Models\SubmitPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubmitPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SubmitPage::class;

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
            'image'=> 'https://photopoint.com.ua/wp-content/uploads/2015/01/Kak-snimat-peyzazh-2.jpg'
        ];
    }
}
