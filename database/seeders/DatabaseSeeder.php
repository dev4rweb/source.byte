<?php

namespace Database\Seeders;

use App\Models\DetailNewsPage;
use App\Models\MainCarousel;
use App\Models\SecondCarousel;
use App\Models\Socials;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => 'Nikodem',
            'email' => 'admin@source-byte.com',
            'password' => \bcrypt('qa9h6`dNWNd{J#rd'),
        ]);

        \App\Models\HomePage::factory()->create([
            'title' => 'Interactive',
            'content' => 'Deck13 Interactive is one of Germany’s leading developers with more than 18 years of experience. With over 60 employees located in Frankfurt, Deck13 Interactive has developed upwards of 20 titles, including major releases such',
            'underText' => 'Do you want to see more games?',
            'btnText' => 'visit a site',
            'btnUrl' => 'http://source-byte.zzz.com.ua/'
        ]);

        \App\Models\HomePage::factory()->create([
            'title' => 'Our news',
            'content' => '',
            'underText' => 'Do you want to see more games',
            'btnText' => 'visit a site',
            'btnUrl' => 'http://source-byte.zzz.com.ua/'
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'steam',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'vk',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'instagram',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'twitter',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'youtube',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'follow',
            'name' => 'facebook',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'write',
            'name' => 'discord',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'write',
            'name' => 'telegram',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'write',
            'name' => 'whatsapp',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        Socials::factory()->create([
            'category' => 'write',
            'name' => 'viber',
            'url' => 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w',
        ]);

        MainCarousel::factory(5)->create([
            'title' => 'Source Byte',
            'content' => 'Got a game? Need a publisher? What are you waiting for?',
            'image' => '/images/home-main-image.png',
//            'image' => env('APP_URL') . '/images/home-main-image.png',
//            'image' => 'http://dev4rweb.zzz.com.ua/images/home-main-image.png',
            'btnText' => 'Visit a site',
            'btnUrl' => '/'
        ]);

        SecondCarousel::factory()->create([
            'title' => 'Source Byte',
            'content' => 'It was a nice calm day, but from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests …',
//            'image'=> base_path('images/simulator.png'),
//        'image' => 'http://dev4rweb.zzz.com.ua/images/simulator.png',
            'image' => '/images/simulator.png',
            'btnText' => 'View more',
            'btnUrl' => '/'
        ]);

        SecondCarousel::factory()->create([
            'title' => 'Source From',
            'content' => 'It was a nice calm day, but from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests …',
            'image' => '/images/interactive-two.png',
            'btnText' => 'View more',
            'btnUrl' => '/'
        ]);

        SecondCarousel::factory()->create([
            'title' => 'Time For Quest',
            'content' => 'Let\'s go for unforgettable journey! Experience amazing moments in the Time For Quest universe! Sail the sea! Fight the biggest beasts in the world! Gain new skills!',
            'image' => '/images/interactive-three.png',
            'btnText' => 'View more',
            'btnUrl' => '/'
        ]);

        DetailNewsPage::factory(30)->create([
            'title' => 'Source Byte: Inside',
            'description' => 'Got a game? Need a publisher? What are you waiting for?',
            'mainImage' => '/images/new-two.png',
            'contentOne' => 'Always strive for better work. Never stop learning. Have fun a clear plan for a new project or just an idea on a napkin? Sky, land, and sea disappear together out of the world.. The dawn breaks high behind the towering and serrated wall of the Cordillera, a clear-cut vision of dark peaks rearing their steep slopes on a lofty pedestal of forest rising from the very edge of the shore. Amongst them the white head of Higuerota rises majestically upon the blue. Bare clusters of enormous.',
            'subTitle' => 'Above it all',
            'contentTwo' => 'The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.',
            'quote' => 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. Steve Jobs – Apple Worldwide Developers’ Conference, 1997',
            'contentThree' => 'At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.',
            'markedList' => '1. "The dawn breaks high behind the towering and serrated wall" 2. "A clear-cut vision of dark peaks rearing their steep slopes" 3. "Amongst them the white head of Higuerota" 4. "Bare clusters of enormous rocks sprinkle with tiny black dots"',
            'image' => '/images/img-news.png',
            'imageAlt' => 'The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on',
            'contentFour' => 'The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.',

        ]);

        DetailNewsPage::factory()->create([
            'title' => 'Source Byte: Inside',
            'description' => 'Got a game? Need a publisher? What are you waiting for?',
            'mainImage' => '/images/new-one.png',
            'contentOne' => 'In the previous parts, we wrote about how to get started developing a game in VR, and how game designers work when creating games in VR. In this article, we will',
            'subTitle' => 'Above it all',
            'contentTwo' => 'The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.',
            'quote' => 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. Steve Jobs – Apple Worldwide Developers’ Conference, 1997',
            'contentThree' => 'At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.',
            'markedList' => '1. "The dawn breaks high behind the towering and serrated wall" 2. "A clear-cut vision of dark peaks rearing their steep slopes" 3. "Amongst them the white head of Higuerota" 4. "Bare clusters of enormous rocks sprinkle with tiny black dots"',
            'image' => '/images/img-news.png',
            'imageAlt' => 'The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on',
            'contentFour' => 'The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.',
        ]);

        DetailNewsPage::factory()->create([
            'title' => 'Jobs Available Now!',
            'description' => 'Got a game? Need a publisher? What are you waiting for?',
            'mainImage' => '/images/new-two.png',
            'contentOne' => 'From the game design point of viev, virtual reality is a sea of ​​unique possibilities. The paths of player interaction with the game aren\'t yet fully fixed in VR',
            'subTitle' => 'Above it all',
            'contentTwo' => 'The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.',
            'quote' => 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. Steve Jobs – Apple Worldwide Developers’ Conference, 1997',
            'contentThree' => 'At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.',
            'markedList' => '1. "The dawn breaks high behind the towering and serrated wall" 2. "A clear-cut vision of dark peaks rearing their steep slopes" 3. "Amongst them the white head of Higuerota" 4. "Bare clusters of enormous rocks sprinkle with tiny black dots"',
            'image' => '/images/img-news.png',
            'imageAlt' => 'The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on',
            'contentFour' => 'The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.',
        ]);

        DetailNewsPage::factory()->create([
            'title' => 'Looking for a Publisher?',
            'description' => 'Got a game? Need a publisher? What are you waiting for?',
            'mainImage' => '/images/new-three.png',
            'contentOne' => 'Our new game Playground VR released on Steam! In this blog, we want to share the features of developing games in virtual reality (we already have two!), And also',
            'subTitle' => 'Above it all',
            'contentTwo' => 'The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.',
            'quote' => 'People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. Steve Jobs – Apple Worldwide Developers’ Conference, 1997',
            'contentThree' => 'At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.',
            'markedList' => '1. "The dawn breaks high behind the towering and serrated wall" 2. "A clear-cut vision of dark peaks rearing their steep slopes" 3. "Amongst them the white head of Higuerota" 4. "Bare clusters of enormous rocks sprinkle with tiny black dots"',
            'image' => '/images/img-news.png',
            'imageAlt' => 'The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on',
            'contentFour' => 'The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.',
        ]);
    }
}
