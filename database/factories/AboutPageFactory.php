<?php

namespace Database\Factories;

use App\Models\AboutPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class AboutPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = AboutPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Our studio',
            'description' => 'Got a game? Need a publisher? What are you waiting for?',
            'mainImage' => '/images/bg-submit.png',
            'subTitle' => 'Developing imaginative new worlds',
            'content' => 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text',
            'cardOneTitle' => 'Best Value in Entertainment',
            'cardOneText' => 'She had a last view back on the skyline of her hometown Bookmarksgrove, the headline of village.',
            'cardOneImage' => '/images/about-one.png',
            'cardTwoTitle' => 'Available on Multiple Platforms',
            'cardTwoText' => 'She had a last view back on the skyline of her hometown Bookmarksgrove, the headline of village.',
            'cardTwoImage' => '/images/about-two.png',
        ];
    }
}
