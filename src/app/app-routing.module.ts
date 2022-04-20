import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AuthguardGuard } from './authguard.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { PageNotFoundService } from './page-not-found.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';


const routes: Routes = [
  {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthguardGuard]},
  {path:'categorylist',component:CategoryListComponent,canActivate:[AuthguardGuard]},
  // {path:'categorylist/delete-category',component:AddcategoryComponent,canActivate:[AuthguardGuard]},
  {path:'categorylist/update/:id',component:UpdatecategoryComponent,canActivate:[AuthguardGuard]},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
