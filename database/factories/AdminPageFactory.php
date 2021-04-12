<?php

namespace Database\Factories;

use App\Models\AdminPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdminPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AdminPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Admin  Page',
            'content' => 'Admin Content',
            'image'=> 'https://www.1zoom.ru/big2/81/172586-foxixol.jpg'
        ];
    }
}
