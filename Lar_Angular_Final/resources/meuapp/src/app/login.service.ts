import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()

export class LoginService {

  public usuarios: Usuario[] = [];
  // private autenticador: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

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
}
