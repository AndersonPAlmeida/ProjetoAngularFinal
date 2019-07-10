<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Usuario;
class UsuarioControlador extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $novo = new Usuario();

        $novo->nome = $request->nome;
        $novo->email = $request->email;
        $novo->cpf = $request->cpf;
        $novo->senha = $request->senha;

        $novo->save();

        // return response($novo, 200);
        return 200;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($email, $senha)
    {
        $info = DB::table('usuarios')->where('email', '$email')->where('senha', '$senha')->get();

        if (isset($info)) {
            return 200;
        }
        return 404;
    }
}
