import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './token-interceptor.service'
import { FormsModule } from '@angular/forms';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeMainContentComponent } from './home-main-content/home-main-content.component'
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { VerificationService } from './verification.service';
import { SecNavComponent } from './sec-nav/sec-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    SigninComponent,
    SignupComponent,
    HomeMainContentComponent,
    HomeFooterComponent,
    SecNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },VerificationService],
  bootstrap: [AppComponent]
})
export class AppModule{

}

