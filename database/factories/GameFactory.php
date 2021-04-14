<?php

namespace Database\Factories;

use App\Models\Game;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Game::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => 'Games  Title',
            'content' => 'Games Content',
            'mainImage'=> '/images/games1.png',
            'category' => 'Simulation',
            'video' => 'https://youtu.be/x11ZCnr87pE',
            'subtitle' => 'About this game',
            'subContent' => 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.',
            'listTitle' => 'Features',
            'list' => '*- Competing with your local friend on the same glasses, *- Ability to change CPU level, *- Advanced AI',
            'subtitleTwo' => 'Gameplay',
            'contentTwo' => 'Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.'
        ];
    }
}
