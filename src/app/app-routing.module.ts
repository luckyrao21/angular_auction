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
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { Aboutus2Component } from './aboutus2/aboutus2.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  { path: 'update-profile', component: UpdateProfileComponent,canActivate:[AuthGaurdService] },
  { path: 'reset-password', component: ResetPasswordComponent,canActivate:[AuthGaurdService] },
  { path: 'place-order', component: PlaceorderComponent,canActivate:[AuthGaurdService] },
  { path: 'add-complaint', component: AddcomplaintComponent,canActivate:[AuthGaurdService] },
  { path: 'view-complaint', component: ViewComplaintComponent,canActivate:[AuthGaurdService] },
  { path: 'view-complaint/revert-complaint/:id', component: RevertComplaintComponent,canActivate:[AuthGaurdService] },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "add-product", component: AddProductComponent,canActivate:[AuthGaurdService] },
  { path: "view-product", component: ViewProductComponent,canActivate:[AuthGaurdService] },
  { path: "view-product-by-seller", component: ProductViewSellerComponent,canActivate:[AuthGaurdService] },
  { path: "view-product-by-seller/update-product/:id", component: UpdateProductComponent,canActivate:[AuthGaurdService] },
  { path: "serch-product", component: SearchProductComponent,canActivate:[AuthGaurdService] },
  { path: "view-product/product-by-id/:id", component: ParticularProductComponent,canActivate:[AuthGaurdService] },
  { path: "view-product/product-by-id/:ids/product-by-id/:id", component: ParticularProductComponent },
  { path: "view-bids/:id", component: ViewBidsComponent,canActivate:[AuthGaurdService] },
  { path: "", component: HomePageComponent },
  { path: "contact-us", component: AboutComponent,canActivate:[AuthGaurdService] },
  { path: "about-us", component: Aboutus2Component,canActivate:[AuthGaurdService] },
  { path: "product-by-id/:id", component: ParticularProductComponent,canActivate:[AuthGaurdService] },
  { path: "about-us/contact-us", component: AboutComponent,canActivate:[AuthGaurdService] },
  { path: "**", component: PageNotFoundComponent },

  // { path: "signin", component: SigninComponent },




]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
