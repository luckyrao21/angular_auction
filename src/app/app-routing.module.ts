import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewSellerComponent } from './product-view-seller/product-view-seller.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';


const routes: Routes = [
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'place-order', component:PlaceorderComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"add-product", component: AddProductComponent},
  {path:"view-product", component: ViewProductComponent},
  {path: "view-product-by-seller",component:ProductViewSellerComponent},
  {path: "view-product-by-seller/update-product/:id", component: UpdateProductComponent},
  {path:"serch-product", component: SearchProductComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
