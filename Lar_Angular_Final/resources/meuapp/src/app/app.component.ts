import { Component } from '@angular/core';
import { PostProduto } from './postProduto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MirrorFashion';

  private mostrarMenu: boolean = false;

  constructor(private loginService: LoginService) {
    
   }

  ngOnInit() {
    this.loginService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
