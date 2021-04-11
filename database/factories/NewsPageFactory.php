<?php

namespace Database\Factories;

use App\Models\NewsPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = NewsPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'News Page',
            'content' => 'News Content',
            'image'=> 'https://st.depositphotos.com/1011976/2987/i/600/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg'
        ];
    }
}
