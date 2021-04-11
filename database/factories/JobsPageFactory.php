<?php

namespace Database\Factories;

use App\Models\JobsPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobsPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JobsPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Jobs Page',
            'content' => 'Jobs Content',
            'image'=> 'https://photoplay.ru/sites/default/files/imce/2019/travel-photo_dk.jpg'
        ];
    }
}
