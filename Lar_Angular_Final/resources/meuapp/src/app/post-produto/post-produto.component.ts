import { Component, OnInit, Input } from '@angular/core';
import { PostProduto } from '../postProduto';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {
  @Input() post: PostProduto;
  
  constructor() { }

  ngOnInit() {
  }

}
