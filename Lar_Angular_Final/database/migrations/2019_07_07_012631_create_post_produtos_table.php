<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostProdutosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_produtos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('preco');
            $table->string('detalhes');
            $table->string('modelo');
            $table->string('material');
            $table->string('lavagem');
            $table->string('arquivo');
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
        Schema::dropIfExists('post_produtos');
    }
}
