<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('mainImage')->nullable();
            $table->string('subTitle')->nullable();
            $table->text('content')->nullable();
            $table->string('cardOneTitle')->nullable();
            $table->text('cardOneText')->nullable();
            $table->string('cardOneImage')->nullable();
            $table->string('cardTwoTitle')->nullable();
            $table->text('cardTwoText')->nullable();
            $table->string('cardTwoImage')->nullable();
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
        Schema::dropIfExists('about_pages');
    }
}
