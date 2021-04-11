<?php

namespace Database\Factories;

use App\Models\GamesPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class GamesPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GamesPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Games  Page',
            'content' => 'Games Content',
            'mainImage'=> 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2019/02/peyzazh-dlya-srisovki-1.jpg'
        ];
    }
}
