import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  fetchCategoryApi="http://localhost:3000/admin/category-list";
  deleteCategoryApi="http://localhost:3000/admin/delete-category";
  updateCategoryApi="http://localhost:3000/admin/update";
  viewById="http://localhost:3000/admin/category-by-id"



  constructor(private http:HttpClient) { }

  public getCategoryList():Observable<any>{
    return this.http.get<any>(this.fetchCategoryApi);
  }
  public removecategory(id:any):Observable<any>{
    return this.http.post<any>(this.deleteCategoryApi,{id:id});
  }
  public updatecategory(id:any):Observable<any>{
    return this.http.post<any>(this.updateCategoryApi,{id:id});
  }  
  public fetchById(id:any):Observable<any>{
    return this.http.post<any>(this.viewById,{categoryId : id});
  }  
}