import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { PostProduto } from '../postProduto';
import { PostProdutosService } from '../post-produtos.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private postProdutos: PostProduto[] = [];
  private usuario:Usuario = new Usuario("", "", "");
  private testeCliente: boolean = false;

  constructor(public produtoService: PostProdutosService, public loginService: LoginService) { }

  ngOnInit() {
    this.postProdutos = this.produtoService.postProduto;
  }

  vender(){
    console.log(this.usuario.email+' '+this.usuario.cpf);
    this.loginService.checar(this.usuario.cpf, this.usuario.email);
    this.loginService.testeCliente.subscribe(
      (mostrar) => this.testeCliente = mostrar
    );
  }
}
