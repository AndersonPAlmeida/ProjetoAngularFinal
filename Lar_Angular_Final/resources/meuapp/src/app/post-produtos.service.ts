import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { PostProduto } from './postProduto';
import { Router } from '@angular/router';

@Injectable()

export class PostProdutosService {
  public postsProduto: PostProduto[] = [];

  constructor(private router: Router,private http: HttpClient) {
    this.http.get("/api/").subscribe(
      (posts: any[]) => {
        for (let p of posts) {
          this.postsProduto.push(
            new PostProduto(p.nome, p.preco, p.detalhes, p.modelo, p.mateterial, p.lavagem,p.arquivo, p.id)
          );
        }
      }
    )
  }

  salvar(postProduto: PostProduto, file: File){
    const uploadData = new FormData();
    uploadData.append('nome', postProduto.nome);
    uploadData.append('preco', postProduto.preco);
    uploadData.append('detalhes', postProduto.detalhes);
    uploadData.append('modelo', postProduto.modelo);
    uploadData.append('material', postProduto.material);
    uploadData.append('lavagem', postProduto.lavagem);
    uploadData.append('arquivo', file, file.name);

    this.http.post("/api/produto",uploadData, {reportProgress: true, observe: 'events'}).subscribe(
      (event: any) =>{
        if(event.type == HttpEventType.Response){
          let p: any = event.body;

          this.postsProduto.push(
            new PostProduto(p.nome, p.preco, p.detalhes, p.modelo, p.mateterial, p.lavagem,p.arquivo, p.id)
          );

          this.router.navigate(['/']);
        }
      }
    )
  }
}
