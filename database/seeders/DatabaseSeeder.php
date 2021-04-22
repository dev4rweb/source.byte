<?php

namespace Database\Seeders;

use App\Models\AboutPage;
use App\Models\AdminPage;
use App\Models\ApplyJobPage;
use App\Models\ContactForm;
use App\Models\ContactsPage;
use App\Models\DetailGamePage;
use App\Models\DetailNewsPage;
use App\Models\FooterLinks;
use App\Models\Game;
use App\Models\GameCarousel;
use App\Models\GamePurchase;
use App\Models\GamesPage;
use App\Models\GamesRequirements;
use App\Models\HomePage;
use App\Models\Job;
use App\Models\JobsPage;
use App\Models\LookingJob;
use App\Models\MainCarousel;
use App\Models\News;
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
            'title' => 'Contacts',
            'rightTitle' => 'Do you have a question? Write us',
            'email'=> 'admin@source-byte.com',
            'location'=> 'http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003',
            'phone'=> '+380931731730',
            'address'=> 'SOURCE BYTE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ | Warszawska 36 / 1, 40-010 Katowice, Polska',
            'other'=> 'P 9542816866 | KRS 0000850810 | REGON 386561446',
            'copyright'=> '2020 © SourceByte | All rights reserved',
        ]);

        ContactForm::factory()->create([
            'name' => 'Submit Page',
            'email' => 'Submit Content',
            'phone' => '54675',
            'msg' => 'https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'

        ]);

        PressPage::factory()->create([
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
        ]);

        SubmitPage::factory()->create([
            'title' => 'Submit Page',
            'content' => 'Submit Content',
            'image' => 'https://photopoint.com.ua/wp-content/uploads/2015/01/Kak-snimat-peyzazh-2.jpg'
        ]);

        SubmitGameForm::factory(7)->create([
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



        GamesRequirements::factory()->create([
            'gameId' => '1',
            'minMax' => 'min',
            'OS'=> 'Windows 7',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '4 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ]);
        GamesRequirements::factory()->create([
            'gameId' => '1',
            'minMax' => 'max',
            'OS'=> 'Windows 8',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '5 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ]);


        GamesRequirements::factory()->create([
            'gameId' => '2',
            'minMax' => 'min',
            'OS'=> 'Windows 8',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '5 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ]);
        GamesRequirements::factory()->create([
            'gameId' => '2',
            'minMax' => 'max',
            'OS'=> 'Windows 9',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '7 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '13 GB available space',
        ]);


        GamesRequirements::factory()->create([
            'gameId' => '3',
            'minMax' => 'min',
            'OS'=> 'Windows ',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '5 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ]);
        GamesRequirements::factory()->create([
            'gameId' => '3',
            'minMax' => 'max',
            'OS'=> 'Windows xp',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '8 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '20 GB available space',
        ]);


        GamesRequirements::factory()->create([
            'gameId' => '4',
            'minMax' => 'min',
            'OS'=> 'Windows NT',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '5 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '1 GB available space',
        ]);
        GamesRequirements::factory()->create([
            'gameId' => '4',
            'minMax' => 'max',
            'OS'=> 'Windows 10',
            'processor'=> 'Core i5-4590 (AMD FX 8350)',
            'memory'=> '8 GB RAM',
            'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
            'directX'=> 'Version 11',
            'storage'=> '20 GB available space',
        ]);


        GamePurchase::factory()->create([
            'gameId' => '1',
            'price' => '$19.99',
            'xBox' => true,
            'ps' => true,
            'microsoft' => true,
            'steam' => true,
            'released' => '1/12/16',
            'publisher' => 'Xion Studios',
            'rating' => 'ESRB',
            'fileSize' => '6.8 GB',

        ]);

        GamePurchase::factory()->create([
            'gameId' => '2',
            'price' => '$25.99',
            'xBox' => false,
            'ps' => false,
            'microsoft' => true,
            'steam' => true,
            'released' => '12/10/18',
            'publisher' => 'Any Studios',
            'rating' => 'ESRBA',
            'fileSize' => '86 GB',

        ]);

        GamePurchase::factory()->create([
            'gameId' => '3',
            'price' => '$45.99',
            'xBox' => false,
            'ps' => true,
            'microsoft' => true,
            'steam' => false,
            'released' => '25/10/21',
            'publisher' => 'Storm Studios',
            'rating' => 'ESRBA',
            'fileSize' => '8 GB',

        ]);

        GamePurchase::factory()->create([
            'gameId' => '4',
            'price' => '$18.45',
            'xBox' => false,
            'ps' => false,
            'microsoft' => true,
            'steam' => false,
            'released' => '17/10/18',
            'publisher' => 'Visual Studio',
            'rating' => 'RBA',
            'fileSize' => '12 GB',

        ]);


        News::factory()->create([
            'title' => 'Looking for a Publisher?',
            'category' => 'company',
            'description' => 'Games  description',
            'mainImage' => '/images/new-one.png',
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
        ]);

        News::factory()->create([
            'title' => 'Source Byte: Inside',
            'category' => 'feature company',
            'description' => 'Home/Features of VR development. Part 3 — Creating Graphics for VR Games',
            'mainImage' => '/images/new-two.png',
            'content' => 'In Playground VR, we relied on a large number of elements with which the player could interact, challenge their agility and reaction.
The visual and the feel it creates play a key role in these kinds of games, as the player is the most “part” of the game world. Therefore, it is important to approach the creation of models and the interface in such a way that they do not cause hostility, but complement each other and fulfill their main function – they are the guides of the user in the game.',
            'subtitle' => 'The variety of environments',
            'subContent' => 'When creating models for VR, the emphasis is on geometry, not textures. This is necessary so that the player can, if desired, interact with the object from different angles.

You need to plan the look and feel of your models in advance so that they can be reused and combined with other resources. This will greatly simplify development and optimize the game (more on that later).',
            'blockquote' => 'When creating a staircase, it makes no sense to impose a unique texture on each step and make unique geometry for it, it’s easier to unify them.Simplification',
            'postContent' => 'Interaction is a key element of immersion in VR. For smaller games, the investment of team resources in animation, sound and environment interactivity will be more significant.',
            'list' => 'The dawn breaks high behind the towering and serrated wall *- The dawn breaks high behind the towering and serrated wall *- Amongst them the white head of Higuerota *- Bare clusters of enormous rocks sprinkle with tiny black dots',
            'lastImage' => '/images/news-last-image-two.gif',
            'altImage' => 'When creating VR games, special attention must be paid to the interaction of hardware and software. In particular, one of the key goals is rendering from 90 frames per second for each eye',
            'lastContent' => 'Models with different levels of detail can be created independently or you can entrust this work to automatic polygon reduction systems.',
        ]);

        News::factory()->create([
            'title' => 'Jobs Available Now!',
            'category' => 'feature',
            'description' => 'Home/Features of VR development. Part 3 — Creating Graphics for VR Games',
            'mainImage' => '/images/new-three.png',
            'content' => 'In the previous parts, we wrote about how to get started developing a game in VR, and how game designers work when creating games in VR. In this article, we will',
            'subtitle' => 'The variety of environments',
            'subContent' => 'When creating models for VR, the emphasis is on geometry, not textures. This is necessary so that the player can, if desired, interact with the object from different angles.

You need to plan the look and feel of your models in advance so that they can be reused and combined with other resources. This will greatly simplify development and optimize the game (more on that later).',
            'blockquote' => 'When creating a staircase, it makes no sense to impose a unique texture on each step and make unique geometry for it, it’s easier to unify them.Simplification',
            'postContent' => 'Interaction is a key element of immersion in VR. For smaller games, the investment of team resources in animation, sound and environment interactivity will be more significant.',
            'list' => 'The dawn breaks high behind the towering and serrated wall *- The dawn breaks high behind the towering and serrated wall *- Amongst them the white head of Higuerota *- Bare clusters of enormous rocks sprinkle with tiny black dots',
            'lastImage' => '/images/news-last-image-two.gif',
            'altImage' => 'When creating VR games, special attention must be paid to the interaction of hardware and software. In particular, one of the key goals is rendering from 90 frames per second for each eye',
            'lastContent' => 'Models with different levels of detail can be created independently or you can entrust this work to automatic polygon reduction systems.',
        ]);

        Job::factory()->create([
            'position' => 'Graphics Programmer',
            'description' => 'Description',
            'titleOne' => 'You are:',
            'listOne' => 'A graphics geek: Constantly on the lookout for new features and techniques defining the bleeding edge of real time rendering *- An engineer: Not only do you know all the advances in realtime rendering and love talking about them, you also know the importance of being able to implement them efficiently *- A problem solver: You know a problem when you see one, and you also know that if you put on your blindfold, the problem will come back later and bite you and your fellow developers in the rear right. *- Educated: your Bachelor’s or Master’s degree in Computer Science or a related tech field has a few scratches on it from where you’ve put it to use.',
            'titleTwo' => 'You will:',
            'listTwo' => 'Become an integral part of our small core tech team *- Help define the looks of our next games *- Make sure that all the shiny features and techniques work equally well *- Dig deep into the codebase of our tech to improve existing systems',
            'titleThree' => 'Your specs:',
            'listThree' => 'C++, HLSL/GLSL, Git, SVN, Perforce, Strong 3D Math',
        ]);

        Job::factory()->create([
            'position' => 'Unity Developer',
            'description' => 'Description',
            'titleOne' => 'Who are we looking for?',
            'listOne' => 'We are looking for someone who will be able to work with us and won’t be afraid of taking on new challenges.',
            'titleTwo' => 'What we expect:',
            'listTwo' => 'being familiar with Unity 3D and being able to do the deputed tasks *- self-reliance *- being full of passion and desire *- ability of using Discord/Skype *- being familiar with engines, simulations of physic and animations *- being familiar to Unity UI *- having knowledge about the lightning, textures, materials and shaders *- Experience in compiling and implementing Unity projects for Nintendo Switch, PC, VR, Xbox, Playstation.',
            'titleThree' => 'What will be your duties:',
            'listThree' => 'creating games in Unity *- projecting and editing the code *- optimizing our projects *- Dig deep into the codebase of our tech to improve existing systems',
        ]);

        Job::factory()->create([
            'position' => 'Game Designer',
            'description' => 'Description',
            'titleOne' => 'What will you be responsible for:',
            'listOne' => 'working on one of the gameplay core features *- creating in-game levels *- bringing a creative content to our projects',
            'titleTwo' => 'What we require:',
            'listTwo' => 'ability to work in a group *- fluent English (Writing and speaking) *- being creative and self-reliance *- be familiar with popular game engines *- knowladge about the game development process',
            'titleThree' => '',
            'listThree' => '',
        ]);

        LookingJob::factory(3)->create([
            'jobPosition'=> 'position',

            'name' => 'name',
            'country' => 'country',
            'email' => 'email',
            'yourSite' => 'yourSite',
            'experience' => 'experience',
            'yourSiteTwo' => 'yourSiteTwo',

            'unity' => false,
            'unreal' => false,
            'design' => false,
            'artist' => false,
            'marketing' => false,
            'webDev' => false,
            'cProgrammer' => false,
            'graphicDesign' => false,
            'writer' => false,
            'levelDesigner' => false,
            'gameDesigner' => false,
            'composer' => false,
            'other' => false,

            'impress' => 'impress',
            'earn' => 'earn',
            'uploadFile' => 'uploadFile',
            'website' => 'website',
            'help' => 'help',
        ]);

        FooterLinks::factory()->create([
            'steam' => 'https://source-byte.com/',
            'xBox' => 'https://source-byte.com/',
            'playstation' => 'https://source-byte.com/',
            'twitch' => 'https://source-byte.com/',
            'microsoft' => 'https://source-byte.com/',
            'viveport' => 'https://source-byte.com/',
            'nintendo' => 'https://source-byte.com/',
            'oculus' => 'https://source-byte.com/',
            'gog' => 'https://source-byte.com/',
            'epic' => 'https://source-byte.com/',
            'itch' => 'https://source-byte.com/',
        ]);
    }
}
