<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFooterLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footer_links', function (Blueprint $table) {
            $table->id();
            $table->string('steam')->nullable();
            $table->string('xBox')->nullable();
            $table->string('playstation')->nullable();
            $table->string('twitch')->nullable();
            $table->string('microsoft')->nullable();
            $table->string('viveport')->nullable();
            $table->string('nintendo')->nullable();
            $table->string('oculus')->nullable();
            $table->string('gog')->nullable();
            $table->string('epic')->nullable();
            $table->string('itch')->nullable();
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
        Schema::dropIfExists('footer_links');
    }
}
