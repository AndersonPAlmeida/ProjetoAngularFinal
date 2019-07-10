import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SobreComponent } from './sobre/sobre.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: FormLoginComponent},
  //{path: 'produtos/:id', } //falta o componente
  {path: 'sobre', component: SobreComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'produto', component: FormProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
