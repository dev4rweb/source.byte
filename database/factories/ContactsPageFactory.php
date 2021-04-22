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
            'title' => 'Contacts',
            'rightTitle' => 'Do you have a question? Write us',
            'email'=> 'admin@source-byte.com',
            'location'=> 'http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003',
            'phone'=> '+380931731730',
            'address'=> 'SOURCE BYTE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ | Warszawska 36 / 1, 40-010 Katowice, Polska',
            'other'=> 'P 9542816866 | KRS 0000850810 | REGON 386561446',
            'copyright'=> '2020 © SourceByte | All rights reserved',
        ];
    }
}
