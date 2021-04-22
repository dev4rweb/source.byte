<?php

namespace Database\Factories;

use App\Models\PressPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class PressPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PressPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ytLink' => 'https://www.youtube.com/embed/x11ZCnr87pE',
            'ytBtnText' => 'View Games',
            'ytBtnLink' => '/',
            'gameTitle' => 'Our games',
            'gameText' => 'Do you want to see more games?',
            'gameLink' => '/games',
            'title' => 'Want to be part of the family?',
            'subTitleLeft' => 'You’ve made a game. What now?',
            'subTitleRight' => 'We bring your game to the gamers.',
            'contentLeft' => 'The games market can feel intimidating and the business models are sometimes hard to grasp. Marketing requires a lot of experience and even more hard work. Now wouldn’t it be awesome to meet a bunch of people who come from game development themselves and who can come up with a great plan to make your game a success?',
            'contentRight' => 'We at Spotlight understand game development and we have a lot of experience in how to market and distribute games. We’re not a traditional publisher who will take away your IP for money. Instead, we want to add to your team the power of marketing, sales, other stuff you need in order to make your dream of a great game release come true.',
            'teamTitle' => 'Our team',
            'addSubTitleLeft' => 'What are we looking for?',
            'addSubTitleRight' => 'How to pitch',
            'addContentLeft' => 'We are looking for your creative project. So pitch us your game and tell us what you need? Do you have a finished game and just need the final marketing push to release it? Are you still prototyping and need support from the very first minute on? Or is it something in between? We might be able to fill up the missing roles in your team!',
            'addContentRight' => 'So you’ve heard enough and you’re ready to pitch us your game? That’s great to hear! Let’s become collaborative partners and reach far beyond the stars together. So what are you waiting for? Tell us about your project by clicking the button below. So what are you waiting for? Tell us about your project by clicking the button below.',
            'addBtnLink' => '/submit',
            ];
    }
}
