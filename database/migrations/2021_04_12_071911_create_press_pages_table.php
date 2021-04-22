<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePressPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('press_pages', function (Blueprint $table) {
            $table->id();
            $table->string('ytLink')->nullable();
            $table->string('ytBtnText')->nullable();
            $table->string('ytBtnLink')->nullable();
            $table->string('gameTitle')->nullable();
            $table->string('gameText')->nullable();
            $table->string('gameLink')->nullable();
            $table->string('title')->nullable();
            $table->string('subTitleLeft')->nullable();
            $table->string('subTitleRight')->nullable();
            $table->text('contentLeft')->nullable();
            $table->text('contentRight')->nullable();
            $table->string('teamTitle')->nullable();
            $table->string('addSubTitleLeft')->nullable();
            $table->string('addSubTitleRight')->nullable();
            $table->text('addContentLeft')->nullable();
            $table->text('addContentRight')->nullable();
            $table->string('addBtnLink')->nullable();
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
        Schema::dropIfExists('press_pages');
    }
}
