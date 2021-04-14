<?php

namespace Database\Seeders;

use App\Models\AboutPage;
use App\Models\AdminPage;
use App\Models\ApplyJobPage;
use App\Models\ContactForm;
use App\Models\ContactsPage;
use App\Models\DetailGamePage;
use App\Models\DetailNewsPage;
use App\Models\Game;
use App\Models\GameCarousel;
use App\Models\GamesPage;
use App\Models\HomePage;
use App\Models\JobsPage;
use App\Models\MainCarousel;
use App\Models\NewsPage;
use App\Models\OurTeam;
use App\Models\PressPage;
use App\Models\SecondCarousel;
use App\Models\Socials;
use App\Models\SubmitGameForm;
use App\Models\SubmitPage;
use App\Models\User;
use Illuminate\Database\Seeder;
use function bcrypt;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Nikodem',
            'email' => 'admin@source-byte.com',
            'password' => bcrypt('qa9h6`dNWNd{J#rd'),
        ]);

        HomePage::factory()->create([
            'title' => 'Interactive',
            'content' => 'Deck13 Interactive is one of Germany’s leading developers with more than 18 years of experience. With over 60 employees located in Frankfurt, Deck13 Interactive has developed upwards of 20 titles, including major releases such',
            'underText' => 'Do you want to see more games?',
            'btnText' => 'visit a site',
            'btnUrl' => 'http://source-byte.zzz.com.ua/'
        ]);

        HomePage::factory()->create([
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
//            'image' => '/images/home-main-image.png',
            'btnText' => 'Visit a site',
            'btnUrl' => '/'
        ]);

        SecondCarousel::factory()->create([
            'title' => 'Source Byte',
            'content' => 'It was a nice calm day, but from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests …',
//            'image'=> base_path('images/simulator.png'),
//        'image' => '/images/simulator.png',
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

        AboutPage::factory()->create([
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
        ]);

        OurTeam::factory()->create([
            'name' => 'Terri Tomlinson',
            'pos' => 'UI/UX designer',
            'photo' => '/images/1.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Beck Fritz',
            'pos' => 'UI/UX designer',
            'photo' => '/images/2.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Suzannah Quintana',
            'pos' => 'UI/UX designer',
            'photo' => '/images/3.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Ariya West',
            'pos' => 'UI/UX designer',
            'photo' => '/images/4.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Pollyanna Doherty',
            'pos' => 'UI/UX designer',
            'photo' => '/images/5.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Nasir Salter',
            'pos' => 'UI/UX designer',
            'photo' => '/images/6.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Kaden Mcdonnell',
            'pos' => 'UI/UX designer',
            'photo' => '/images/7.png'
        ]);
        OurTeam::factory()->create([
            'name' => 'Jose Healy',
            'pos' => 'UI/UX designer',
            'photo' => '/images/8.png'
        ]);


        GamesPage::factory(10)->create([
            'title' => 'Bocce VR Simulator',
            'content' => 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.
In his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            'mainImage' => '/images/games1.png'
        ]);

        GamesPage::factory(10)->create([
            'title' => 'Time for quest',
            'content' => 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.
In his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            'mainImage' => '/images/games2.png'
        ]);

        GamesPage::factory(10)->create([
            'title' => 'Long name for demonstation two-line variant of title',
            'content' => 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.
In his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            'mainImage' => '/images/games3.png'
        ]);

        GamesPage::factory(10)->create([
            'title' => 'Royal resque',
            'content' => 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.
In his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            'mainImage' => '/images/games4.png'
        ]);

        NewsPage::factory()->create([
            'title' => 'News Page',
            'content' => 'News Content',
            'image' => 'https://st.depositphotos.com/1011976/2987/i/600/depositphotos_29872557-stock-photo-old-bridge-over-the-river.jpg'
        ]);

        JobsPage::factory()->create([
            'title' => 'Jobs Page',
            'content' => 'Jobs Content',
            'image' => 'https://photoplay.ru/sites/default/files/imce/2019/travel-photo_dk.jpg'
        ]);


        ContactsPage::factory()->create([
            'title' => 'Contacts  Page',
            'content' => 'Contacts Content',
            'image' => 'https://photoplay.ru/sites/default/files/imce/2019/travel-photo_dk.jpg'
        ]);

        ContactForm::factory()->create([
            'name' => 'Submit Page',
            'email' => 'Submit Content',
            'phone' => '54675',
            'msg' => 'https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'

        ]);

        PressPage::factory()->create([
            'title' => 'Press Page',
            'content' => 'Press Content',
            'image' => 'https://cdn.pixabay.com/photo/2020/03/24/22/34/illustration-4965674_960_720.jpg'
        ]);

        SubmitPage::factory()->create([
            'title' => 'Submit Page',
            'content' => 'Submit Content',
            'image' => 'https://photopoint.com.ua/wp-content/uploads/2015/01/Kak-snimat-peyzazh-2.jpg'
        ]);

        SubmitGameForm::factory()->create([
            'gameNameOne' => 'gameNameOne',
            'gameNameTwo' => 'gameNameTwo',
            'contactName' => 'contactName',
            'contactEmail' => 'contactEmail',
            'company' => 'company',
            'team' => 'team',
            'prevProject' => 'prevProject',
            'gameDesc' => 'gameDesc',
            'genre' => 'genre',
            'similar' => 'similar',
            'featureOne' => 'featureOne',
            'featureTwo' => 'featureTwo',
            'featureThree' => 'featureThree',
            'featureFour' => 'featureFour',
            'featureFive' => 'featureFive',
            'featureSix' => 'featureSix',
            'uniqFeature' => 'uniqFeature',
            'playTime' => 'playTime',
            'cbxPC' => false,
            'cbxPS' => false,
            'cbxXBox' => false,
            'cbxSwitch' => false,
            'optional' => 'optional',
            'dateMonth' => 'dateMonth',
            'addPlatform' => 'addPlatform',
            'topRisks' => 'topRisks',
            'cbxMarketing' => false,
            'cbxQA' => false,
            'cbxConsole' => false,
            'cbxPorting' => false,
            'cbxLocalization' => false,
            'cbxVoice' => false,
            'cbxProduction' => false,
            'cbxGameDesign' => false,
            'cbxDevelopment' => false,
            'uploadFile' => 'uploadFile',
            'urlUploadFile' => 'urlUploadFile',
            'helpList' => 'helpList',
        ]);

        ApplyJobPage::factory()->create([
            'title' => 'Submit Page',
            'content' => 'Submit Content',
            'image' => 'https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'
        ]);

        DetailGamePage::factory()->create([
            'title' => 'Detail Game  Page',
            'content' => 'Detail Game Content',
            'image' => 'https://ar.culture.ru/attachments/attachment/preview/5bab955657f0200d3471d194-preview.jpg'
        ]);

        AdminPage::factory()->create([
            'title' => 'Admin  Page',
            'content' => 'Admin Content',
            'image' => 'https://www.1zoom.ru/big2/81/172586-foxixol.jpg'
        ]);

        Game::factory()->create([
            'title' => 'Bocce VR Simulator',
            'content' => 'Bocce VR Simulator is a perfect simulation game where you can experience every detail of bocce game. No matter if you are an amateur or professional bocce player you can step in and compete with AI or your local friend.',
            'mainImage' => '/images/games1.png',
            'category' => 'Simulation',
            'video' => 'https://www.youtube.com/watch?v=vRxA6KzIg8g',
            'subtitle' => 'About this game',
            'subContent' => 'Bocce VR Simulator – a simple game known to mankind for years with a lot of fans. The simplicity of the rules and the ability to play anywhere make the game suitable for everyone, both for the younger and the older ones. In this game, physical skills are important, as well as strategies and a bit of luck, which introduces some kind of randomness. The object of the game is to throw the balls as close to the Palino as possible. For balls that are closer to the opponent’s balls than the opponent’s balls, a corresponding point reduction is given. The game ends when the player reaches a certain number of points.
Bocce VR is the perfect simulator where all the rules and details of the game are included. Thanks to the perfect representation of the pitch and surroundings, the game takes a realistic form. The ability to play with a friend increases the desire to compete and win even more, which results in much more excitement.
So put on your VR headset and indulge in the world of Bocce VR',

            'listTitle' => 'Features',
            'list' => '*- Competing with your local friend on the same glasses, *- Ability to change CPU level, *- Advanced AI, *- Ability to choose amount of points that are needed to finish the game, *- Choose a name to your character, *- Realistic graphic and gameplay',
            'subtitleTwo' => 'Gameplay',
            'contentTwo' => 'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.'
        ]);

        Game::factory()->create([
            'title' => 'Supfly Delivery Simulator',
            'content' => 'Supfly Delivery Simulator – a game in which humanity is ruled by delivery service and now it’s your time to become the best delivery man in the world! Deliver everything what is needed in the moment. As a robot you have one simple job – to deliver.',
            'mainImage' => '/images/games3.png',
            'category' => 'Simulation',
            'video' => 'https://youtu.be/x11ZCnr87pE',
            'subtitle' => 'About this game',
            'subContent' => 'Supfly Delivery Simulator – a game in which humanity is ruled by delivery service and now it’s your time to become the best deliveryman in the world! Deliver everything what is needed in the moment. As a robot you have one simple job – to deliver. But remember, you have to be punctual and precise – you don’t want to make customers angry. Watch out for your battery level – if it ran out, you would be in trouble. So jump in the game, catch some parcels and try yourself as a deliverer!',

            'listTitle' => 'Features',
            'list' => '*- Weather conditions *- Many unique drones each of them have their own mechanics *- Advanced AI, *- Different types of shipments *- 3 Maps, *- Automatically generated map, *- Fun for hours, *- Possibility to play with a friend',
            'subtitleTwo' => 'Title two',
            'contentTwo' => 'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.'
        ]);

        Game::factory()->create([
            'title' => 'Time For Quest',
            'content' => 'Let’s go for unforgettable journey! Experience amazing moments in the Time For Quest universe! Sail the sea! Fight the biggest beasts in the world! Gain new skills! Get the best weapon of all time and become the greatest hero ever! Take your chance!',
            'mainImage' => '/images/games2.png',
            'category' => 'Quest',
            'video' => 'https://youtu.be/WEh2Ta4prUE',
            'subtitle' => 'About this game',
            'subContent' => 'I hope you would like to join to our universe of Time For Quest where there are no restrictions and you will create your own story as a new hero!

Time For Quest is a 2D open world rpg game inspired by combat, adventures, rpg games as Zelda, Final Fantasy & Moonlighter!',

            'listTitle' => 'Features',
            'list' => '*- Action Battle System *- Crafting *- Fantastic soundtrack, *- Learn countless spells and skills *- More then 100 maps, *- Find secrets and raid dungeons! *- Lots of interesting Quests',
            'subtitleTwo' => 'Gameplay',
            'contentTwo' => 'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.'
        ]);

        Game::factory()->create([
            'title' => 'Royal Rescue SRPG',
            'content' => '“Royal Rescue SRPG” is a role-playing game with a turn-based combat system. From here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests, face the enemies of the kingdom and save the princess!',
            'mainImage' => '/images/games4.png',
            'category' => 'SRPG',
            'video' => 'https://youtu.be/HrmNS4ynJpk',
            'subtitle' => 'About this game',
            'subContent' => 'It was a nice calm day … But from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests, face the enemies of the kingdom and save the princess!

Visit villages, collect items, explore the world, fight enemies.',

            'listTitle' => 'Features',
            'list' => '*- 3-4 hours of pure SRPG fun *- Strategy role-playing game *- Control base *- Side quests *- Classic soundtrack ',
            'subtitleTwo' => 'Gameplay',
            'contentTwo' => 'Alphabet Village and the subline'
        ]);



        GameCarousel::factory()->create([
            'gameId' => '1',
            'image' => '/images/bocce1.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '1',
            'image' => '/images/bocce2.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '1',
            'image' => '/images/bocce3.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '1',
            'image' => '/images/bocce4.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '1',
            'image' => '/images/bocce5.png'
        ]);

        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply1.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply2.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply3.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply4.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply5.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '2',
            'image' => '/images/suply6.png'
        ]);


        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest1.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest2.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest3.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest4.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest5.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest6.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest7.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '3',
            'image' => '/images/quest8.png'
        ]);


        GameCarousel::factory()->create([
            'gameId' => '4',
            'image' => '/images/royal1.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '4',
            'image' => '/images/royal2.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '4',
            'image' => '/images/royal3.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '4',
            'image' => '/images/royal4.png'
        ]);
        GameCarousel::factory()->create([
            'gameId' => '4',
            'image' => '/images/royal5.png'
        ]);
    }
}
