<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('category')->nullable();
            $table->string('description')->nullable();
            $table->string('mainImage')->nullable();
            $table->text('content')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('subContent')->nullable();
            $table->text('blockquote')->nullable();
            $table->text('postContent')->nullable();
            $table->text('list')->nullable();
            $table->string('lastImage')->nullable();
            $table->string('altImage')->nullable();
            $table->text('lastContent')->nullable();
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
        Schema::dropIfExists('news');
    }
}
