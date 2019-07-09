import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';
<<<<<<< HEAD
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: FormLoginComponent},
  //{path: 'produtos/:id', } //falta o componente
  {path: 'sobre', component: SobreComponent}
=======
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: FormLoginComponent}, 
  {path: 'produtos/:id', component: ProdutoComponent } 
>>>>>>> d9cc6577ba77e5001e75ff24ae9d1f62741cfeba
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
