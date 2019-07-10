import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()

export class LoginService {

  public usuarios: Usuario[] = [];
  // private autenticador: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();
  mostrarAlert = new EventEmitter<boolean>();

  constructor( 
    private router: Router,
    private http: HttpClient) {}  

  logar(email:string, senha:string){    
    this.http.get("api/usuario/"+email+"/"+senha).subscribe(
      (retorno: any) => {
        if (retorno == 200) {
          this.mostrarMenu.emit(true);
        }
        else{
          this.mostrarMenu.emit(false);
        }        
        this.router.navigate(['/']);
      }
    );
  }

  cadastrar(user: Usuario){   
    const uploadUser = new FormData();

    uploadUser.append('email', user.email);
    uploadUser.append('senha', user.senha);
    uploadUser.append('nome', user.nome);
    uploadUser.append('cpf', user.cpf);

    this.http.post("/api/usuario", uploadUser, {reportProgress: true, observe: 'events'}).subscribe(
      (event:any) =>{
        /* if (event.headers.status === 200) {
          this.router.navigate(['/']);
        } */
        if (event.body == 200) {
          this.mostrarAlert.emit(false);
          this.router.navigate(['/']);
        }
        else{
          this.mostrarAlert.emit(true);
        }
      }
    )
  }
}