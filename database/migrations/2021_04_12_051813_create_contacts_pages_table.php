<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('rightTitle');
            $table->string('email');
            $table->text('location');
            $table->string('phone');
            $table->text('address');
            $table->text('other');
            $table->string('copyright');
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
        Schema::dropIfExists('contacts_pages');
    }
}
