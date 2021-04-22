<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_purchases', function (Blueprint $table) {
            $table->id();
            $table->string('gameId')->nullable();
            $table->string('price')->nullable();
            $table->string('xBox')->nullable();
            $table->string('ps')->nullable();
            $table->string('microsoft')->nullable();
            $table->string('steam')->nullable();
            $table->string('released')->nullable();
            $table->string('publisher')->nullable();
            $table->string('rating')->nullable();
            $table->string('fileSize')->nullable();
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
        Schema::dropIfExists('game_purchases');
    }
}
