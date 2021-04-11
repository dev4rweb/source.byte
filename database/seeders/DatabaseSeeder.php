<?php

namespace Database\Seeders;

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
    }
}
