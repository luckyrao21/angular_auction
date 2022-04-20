import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewSellerComponent } from './product-view-seller/product-view-seller.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"add-product", component: AddProductComponent},
  {path:"view-product", component: ViewProductComponent},
  {path: "view-product-by-seller",component:ProductViewSellerComponent},
  {path: "view-product-by-seller/update-product/:id", component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
