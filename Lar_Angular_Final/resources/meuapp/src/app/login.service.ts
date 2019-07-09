import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable()

export class LoginService {

  public usuarios: Usuario[] = [];

  constructor( private http: HttpClient) {}  

  logar(email:string, senha:string){
    // console.log("email "+email+" senha "+senha);
    this.http.get("/api/usuario/"+email+"/"+senha).subscribe(
      (retorno: any) => {
        console.log(retorno);
      }
    );
  }
}
