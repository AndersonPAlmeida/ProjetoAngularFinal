import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  private mostrarAlert: boolean = false;
  private usuario:Usuario = new Usuario("", "");

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.loginService.mostrarAlert.subscribe(
      mostrar => this.mostrarAlert = mostrar
    );
  }

  salvar(){
    this.loginService.cadastrar(this.usuario);
    this.loginService.mostrarAlert.subscribe(
      mostrar => this.mostrarAlert = mostrar
    );
  }
}
