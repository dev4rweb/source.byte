<?php

namespace Database\Factories;

use App\Models\ContactsPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactsPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ContactsPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Contacts  Page',
            'content' => 'Contacts Content',
            'image'=> 'https://photoplay.ru/sites/default/files/imce/2019/travel-photo_dk.jpg'
        ];
    }
}
