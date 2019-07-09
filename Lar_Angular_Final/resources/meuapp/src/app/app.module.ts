import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeComponent } from './home/home.component';
import { PostProdutoComponent } from './post-produto/post-produto.component';
import { PostProdutosService } from './post-produtos.service';
import { LoginService } from './login.service';
<<<<<<< HEAD
import { SobreComponent } from './sobre/sobre.component';
=======
import { ProdutoComponent } from './produto/produto.component';
>>>>>>> d9cc6577ba77e5001e75ff24ae9d1f62741cfeba

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    FormLoginComponent,
    HomeComponent,
    PostProdutoComponent,
<<<<<<< HEAD
    SobreComponent
=======
    ProdutoComponent
>>>>>>> d9cc6577ba77e5001e75ff24ae9d1f62741cfeba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PostProdutosService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
