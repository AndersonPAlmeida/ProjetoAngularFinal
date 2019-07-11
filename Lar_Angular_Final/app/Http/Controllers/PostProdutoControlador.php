<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\PostProduto;

class PostProdutoControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostProduto::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new PostProduto();

        $path = $request->file('arquivo')->store('imagens', 'public');
        $post->nome = $request->nome;
        $post->preco = $request->preco;
        $post->detalhes = $request->detalhes;
        $post->modelo = $request->modelo;
        $post->material = $request->material;
        $post->lavagem = $request->lavagem;
        $post->arquivo = $path;

        $post->save();

        return response($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = PostProduto::find($id);

        if (isset($post)) {
            return $post;
        }
        return  404;
    }
}
