<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = News::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Building games for multiple devices',
            'category' => 'company',
            'description' => 'Games  description',
            'mainImage' => '/images/image-news-two.png',
            'content' => 'Always strive for better work. Never stop learning. Have fun a clear plan for a new project or just an idea on a napkin? Sky, land, and sea disappear together out of the world..

The dawn breaks high behind the towering and serrated wall of the Cordillera, a clear-cut vision of dark peaks rearing their steep slopes on a lofty pedestal of forest rising from the very edge of the shore. Amongst them the white head of Higuerota rises majestically upon the blue. Bare clusters of enormous.',
            'subtitle' => 'Above it all',
            'subContent' => 'The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.',
            'blockquote' => 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. Steve Jobs – Apple Worldwide Developers’ Conference, 1997',
            'postContent' => 'At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.',
            'list' => 'The dawn breaks high behind the towering and serrated wall *- The dawn breaks high behind the towering and serrated wall *- Amongst them the white head of Higuerota *- Bare clusters of enormous rocks sprinkle with tiny black dots',
            'lastImage' => '/images/img-news.png',
            'altImage' => 'The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on',
            'lastContent' => 'The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.',
        ];
    }
}
