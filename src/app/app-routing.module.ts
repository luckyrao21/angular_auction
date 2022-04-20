import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
