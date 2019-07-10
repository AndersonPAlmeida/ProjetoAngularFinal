import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  constructor(public loginService: LoginService) { }
  private usuario:Usuario = new Usuario("", "");

  ngOnInit() {
  }

  logar(){
    this.loginService.logar(this.usuario.email, this.usuario.senha);
  }
}
