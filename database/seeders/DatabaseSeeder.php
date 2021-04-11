<?php

namespace Database\Seeders;

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
    }
}
