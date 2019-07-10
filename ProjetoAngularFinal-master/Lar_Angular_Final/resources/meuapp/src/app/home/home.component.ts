import { Component, OnInit } from '@angular/core';
import { PostProduto } from '../postProduto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private posts: PostProduto[] = [
    new PostProduto("Camisa", 29.50, "Esse é o melhor casaco de Cardigã que você já viu.", "Cardigã", "poliester", "mão"),
    new PostProduto("Bermuda", 30.50, "Esse é o melhor.", "7845", "Algodão", "Lavar"),
    new PostProduto("Calça", 28.50, "casaco de Cardigã que você já viu.", "digã 7845", "Algodão e poliester", "Lavar a mão"),
    new PostProduto("Camisa Curta", 29.40, "casaco de Cardigã.", "Cardigã 78", "Algodão ", "Lavar"), 
    new PostProduto("Camisa", 29.50, "Esse é o melhor casaco de Cardigã que você já viu.", "Cardigã", "poliester", "mão"),
    new PostProduto("Bermuda", 30.50, "Esse é o melhor.", "7845", "Algodão", "Lavar"),
    new PostProduto("Calça", 28.50, "casaco de Cardigã que você já viu.", "digã 7845", "Algodão e poliester", "Lavar a mão"),
    new PostProduto("Camisa Curta", 29.40, "casaco de Cardigã.", "Cardigã 78", "Algodão ", "Lavar")
  ];
}
