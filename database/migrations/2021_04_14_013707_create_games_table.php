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
            $table->string('title');
            $table->text('content');
            $table->text('mainImage');
            $table->string('category');
            $table->string('video');
            $table->string('subtitle');
            $table->text('subContent');
            $table->string('listTitle');
            $table->text('list');
            $table->string('subtitleTwo');
            $table->text('contentTwo');
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
