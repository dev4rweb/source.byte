<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games_requirements', function (Blueprint $table) {
            $table->id();
            $table->string('gameId')->nullable();
            $table->string('minMax')->nullable();
            $table->string('OS')->nullable();
            $table->string('processor')->nullable();
            $table->string('memory')->nullable();
            $table->string('graphics')->nullable();
            $table->string('directX')->nullable();
            $table->string('storage')->nullable();
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
        Schema::dropIfExists('games_requirements');
    }
}
