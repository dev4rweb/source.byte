<?php

namespace Database\Factories;

use App\Models\DetailGamePage;
use Illuminate\Database\Eloquent\Factories\Factory;

class DetailGamePageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DetailGamePage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Detail Game  Page',
            'content' => 'Detail Game Content',
            'image'=> 'https://ar.culture.ru/attachments/attachment/preview/5bab955657f0200d3471d194-preview.jpg'
        ];
    }
}
