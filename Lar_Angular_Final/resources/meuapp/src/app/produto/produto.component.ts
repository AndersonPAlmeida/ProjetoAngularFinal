import { Component, OnInit, Input } from '@angular/core';
import { PostProduto } from '../postProduto';
import { PostProdutosService } from '../post-produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  constructor(public produtoService: PostProdutosService) { }
  private numID:number;
  ngOnInit() {
    this.produtoService.enviarId.asObservable().subscribe(
      (valor) => {
        this.numID = valor;
      }
    );

    console.log(this.numID);
  }

}
