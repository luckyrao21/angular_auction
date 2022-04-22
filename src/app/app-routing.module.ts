import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RevertComplaintComponent } from './revert-complaint/revert-complaint.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewSellerComponent } from './product-view-seller/product-view-seller.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ParticularProductComponent } from './particular-product/particular-product.component';
import { AppComponent } from './app.component';
import { ViewBidsComponent } from './view-bids/view-bids.component';




const routes: Routes = [
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'place-order', component:PlaceorderComponent},
  {path:'add-complaint', component:AddcomplaintComponent},
  {path:'view-complaint', component:ViewComplaintComponent},
  {path:'view-complaint/revert-complaint/:id',component:RevertComplaintComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"add-product", component: AddProductComponent},
  {path:"view-product", component: ViewProductComponent},
  {path: "view-product-by-seller",component:ProductViewSellerComponent},
  {path: "view-product-by-seller/update-product/:id", component: UpdateProductComponent},
  {path:"serch-product", component: SearchProductComponent},
  {path: "view-product/product-by-id/:id",component: ParticularProductComponent},
  {path: "view-product/product-by-id/:ids/product-by-id/:id",component: ParticularProductComponent},
  {path: "view-bids/:id", component: ViewBidsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
