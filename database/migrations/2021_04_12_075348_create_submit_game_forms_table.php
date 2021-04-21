<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubmitGameFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submit_game_forms', function (Blueprint $table) {
            $table->id();
            $table->string('gameNameOne')->nullable();
            $table->string('gameNameTwo')->nullable();
            $table->string('contactName')->nullable();
            $table->string('contactEmail')->nullable();
            $table->string('company')->nullable();
            $table->string('team')->nullable();
            $table->string('prevProject')->nullable();
            $table->string('gameDesc')->nullable();
            $table->string('genre')->nullable();
            $table->string('similar')->nullable();
            $table->string('featureOne')->nullable();
            $table->string('featureTwo')->nullable();
            $table->string('featureThree')->nullable();
            $table->string('featureFour')->nullable();
            $table->string('featureFive')->nullable();
            $table->string('featureSix')->nullable();
            $table->string('uniqFeature')->nullable();
            $table->string('playTime')->nullable();
            $table->string('cbxPC')->nullable();
            $table->string('cbxPS')->nullable();
            $table->string('cbxXBox')->nullable();
            $table->string('cbxSwitch')->nullable();
            $table->string('optional')->nullable();
            $table->string('dateMonth')->nullable();
            $table->string('addPlatform')->nullable();
            $table->string('topRisks')->nullable();
            $table->string('cbxMarketing')->nullable();
            $table->string('cbxQA')->nullable();
            $table->string('cbxConsole')->nullable();
            $table->string('cbxPorting')->nullable();
            $table->string('cbxLocalization')->nullable();
            $table->string('cbxVoice')->nullable();
            $table->string('cbxProduction')->nullable();
            $table->string('cbxGameDesign')->nullable();
            $table->string('cbxDevelopment')->nullable();
            $table->string('uploadFile')->nullable();
            $table->string('urlUploadFile')->nullable();
            $table->string('helpList')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('submit_game_forms');
    }
}
