import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {FormsModule} from '@angular/forms'
import { SellerService } from './seller.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BuyerService } from './buyer.service';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { RevertComplaintComponent } from './revert-complaint/revert-complaint.component';
// import { Customer } from './customer.buyer.service';
// import { RESETComponent } from './reset/reset.component';
@NgModule({
  declarations: [
    AppComponent,
    UpdateProfileComponent,
    ResetPasswordComponent,
    PlaceorderComponent,
    AddcomplaintComponent,
    ViewComplaintComponent,
    RevertComplaintComponent,

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
  BuyerService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
