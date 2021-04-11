<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailNewsPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_news_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('mainImage')->nullable();
            $table->text('contentOne')->nullable();
            $table->string('subTitle')->nullable();
            $table->text('contentTwo')->nullable();
            $table->text('quote')->nullable();
            $table->text('contentThree')->nullable();
            $table->text('markedList')->nullable();
            $table->string('image')->nullable();
            $table->text('imageAlt')->nullable();
            $table->text('contentFour')->nullable();
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
        Schema::dropIfExists('detail_news_pages');
    }
}
