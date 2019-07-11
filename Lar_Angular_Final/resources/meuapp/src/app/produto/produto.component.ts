import { Component, OnInit, Input } from '@angular/core';
import { PostProduto } from '../postProduto';
import { PostProdutosService } from '../post-produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  private numID:number;
  private postProdutos: PostProduto[] = [];

  constructor(public produtoService: PostProdutosService) { 
    this.produtoService.enviarId.asObservable().subscribe(
      (valor) => {
        this.numID = valor;
      }
    );
  }
  
  ngOnInit() {    
    this.produtoService.buscar(this.numID);
    this.postProdutos = this.produtoService.postProduto;    
  }

}
