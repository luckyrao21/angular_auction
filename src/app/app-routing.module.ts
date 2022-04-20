import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'place-order', component:PlaceorderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
