<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('content')->nullable();
            $table->text('mainImage')->nullable();
            $table->string('category')->nullable();
            $table->string('video')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('subContent')->nullable();
            $table->string('listTitle')->nullable();
            $table->text('list')->nullable();
            $table->string('subtitleTwo')->nullable();
            $table->text('contentTwo')->nullable();
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
        Schema::dropIfExists('games');
    }
}
