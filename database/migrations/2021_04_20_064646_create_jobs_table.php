<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('position')->nullable();
            $table->text('description')->nullable();
            $table->string('titleOne')->nullable();
            $table->text('listOne')->nullable();
            $table->string('titleTwo')->nullable();
            $table->text('listTwo')->nullable();
            $table->string('titleThree')->nullable();
            $table->text('listThree')->nullable();
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
        Schema::dropIfExists('jobs');
    }
}
