import { Component, OnInit } from '@angular/core';
import { PostProdutosService } from '../post-produtos.service';
import { PostProduto } from '../postProduto';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  constructor(public produtoService: PostProdutosService) { }
  private produto: PostProduto = new PostProduto("", "", "", "", "", "");
  private nomearquivo: string = '';
  arquivo: null;

  ngOnInit() {
  }

  mudouarquivo(event){
    this.nomearquivo = event.target.files[0].name;
    this.arquivo = event.target.files[0];
  }

  salvar(){
    this.produtoService.salvar(this.produto, this.arquivo);
  }
}
