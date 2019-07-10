import { Component, OnInit } from '@angular/core';
import { PostProduto } from '../postProduto';
import { PostProdutosService } from '../post-produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postProdutos: PostProdutosService) { }
  
  private postsProdutos: PostProduto[] = [];
  
  ngOnInit() {
    this.postsProdutos = this.postProdutos.postsProduto;
  }
  
}
