<?php

namespace Database\Factories;

use App\Models\LookingJob;
use Illuminate\Database\Eloquent\Factories\Factory;

class LookingJobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LookingJob::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
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
        ];
    }
}
