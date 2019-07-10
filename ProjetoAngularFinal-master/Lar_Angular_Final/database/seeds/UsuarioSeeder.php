<?php

use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("usuarios")->insert([], ["nome"=>"Jannel"],["email"=>"jglanert0@topsy.com"],["senha"=>"123as"], []);
    }
}
