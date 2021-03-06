<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'PostProdutoControlador@index');
Route::post('/produto', 'PostProdutoControlador@store');
Route::get('/produto/{id}', 'PostProdutoControlador@show');

Route::post('/usuario', 'UsuarioControlador@store');
Route::get('/usuario/{email}/{senha}', 'UsuarioControlador@show');
Route::get('/user/{cpf}/{email}', 'UsuarioControlador@teste');