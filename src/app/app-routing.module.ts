import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RevertComplaintComponent } from './revert-complaint/revert-complaint.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'place-order', component:PlaceorderComponent},
  {path:'add-complaint', component:AddcomplaintComponent},
  {path:'view-complaint', component:ViewComplaintComponent},
  {path:'view-complaint/revert-complaint/:id',component:RevertComplaintComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
