import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {FormsModule} from '@angular/forms'
import { SellerService } from './seller.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BuyerService } from './buyer.service';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeMainContentComponent } from './home-main-content/home-main-content.component'
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { VerificationService } from './verification.service';
import { SecNavComponent } from './sec-nav/sec-nav.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductViewSellerComponent } from './product-view-seller/product-view-seller.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ParticularProductComponent } from './particular-product/particular-product.component';
import { ViewBidsComponent } from './view-bids/view-bids.component';

@NgModule({
  declarations: [
    UpdateProfileComponent,
    ResetPasswordComponent,
    PlaceorderComponent,
    AppComponent,
    AddProductComponent,
    ViewProductComponent,
    ProductViewSellerComponent,
    UpdateProductComponent,
    HomeNavComponent,
    SigninComponent,
    SignupComponent,
    HomeMainContentComponent,
    HomeFooterComponent,
    SecNavComponent,
    SearchProductComponent,
    ParticularProductComponent,
    ViewBidsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptorService,
     multi:true
   },
  SellerService,
  BuyerService,
  VerificationService

],
  bootstrap: [AppComponent]
})
export class AppModule{

}

