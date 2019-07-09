import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: FormLoginComponent}, 
  {path: 'produtos/:id', component: ProdutoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
