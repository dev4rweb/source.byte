<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Job::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'position' => 'Graphics Programmer',
            'description' => 'Description',
            'titleOne' => 'You are:',
            'listOne' => 'A graphics geek: Constantly on the lookout for new features and techniques defining the bleeding edge of real time rendering *- An engineer: Not only do you know all the advances in realtime rendering and love talking about them, you also know the importance of being able to implement them efficiently',
            'titleTwo' => 'You will:',
            'listTwo' => 'Become an integral part of our small core tech team *- Help define the looks of our next games',
            'titleThree' => 'Your specs:',
            'listThree' => 'C++, HLSL/GLSL, Git, SVN, Perforce, Strong 3D Math',
        ];
    }
}
