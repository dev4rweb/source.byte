<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLookingJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('looking_jobs', function (Blueprint $table) {
            $table->id();

            $table->string('jobPosition')->nullable();

            $table->string('name')->nullable();
            $table->string('country')->nullable();
            $table->string('email')->nullable();
            $table->string('yourSite')->nullable();
            $table->text('experience')->nullable();
            $table->string('yourSiteTwo')->nullable();

            $table->string('unity')->nullable();
            $table->string('unreal')->nullable();
            $table->string('design')->nullable();
            $table->string('artist')->nullable();
            $table->string('marketing')->nullable();
            $table->string('webDev')->nullable();
            $table->string('cProgrammer')->nullable();
            $table->string('graphicDesign')->nullable();
            $table->string('writer')->nullable();
            $table->string('levelDesigner')->nullable();
            $table->string('gameDesigner')->nullable();
            $table->string('composer')->nullable();
            $table->string('other')->nullable();

            $table->text('impress')->nullable();
            $table->text('earn')->nullable();

            $table->string('uploadFile')->nullable();
            $table->string('website')->nullable();
            $table->text('help')->nullable();

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
        Schema::dropIfExists('looking_jobs');
    }
}
