<?php

namespace Database\Seeders;

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
    }
}
