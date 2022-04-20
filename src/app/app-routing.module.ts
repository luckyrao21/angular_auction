import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'place-order', component:PlaceorderComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
