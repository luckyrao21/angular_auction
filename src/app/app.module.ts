import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from './userservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AddcategoryComponent,
    CategoryListComponent,
    UpdatecategoryComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [UserserviceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
