<?php

namespace Database\Factories;

use App\Models\SubmitGameForm;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubmitGameFormFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SubmitGameForm::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
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
        ];
    }
}
