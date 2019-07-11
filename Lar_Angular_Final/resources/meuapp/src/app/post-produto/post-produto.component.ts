import { Component, OnInit, Input, Output } from '@angular/core';
import { PostProduto } from '../postProduto';
import { Router } from '@angular/router';
import { PostProdutosService } from '../post-produtos.service';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {
  @Input() post: PostProduto;
  // @Output() recebePoste: PostProduto = this.post;

  constructor(private router: Router,public produtoService: PostProdutosService) { }

  ngOnInit() {
  }
  
  selecionar(){
    this.produtoService.mandarId(this.post.id);
    this.router.navigate(['/produtos/'+this.post.id]);
  }
}
