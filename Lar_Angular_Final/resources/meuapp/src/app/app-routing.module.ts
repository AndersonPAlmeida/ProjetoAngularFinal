import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
