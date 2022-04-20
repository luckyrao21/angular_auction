import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public addProduct(productDeatails:any){
    let addProductApi = "http://localhost:3000/product/add-product"
    return this.http.post<any>(addProductApi,productDeatails);
  }
  public viewProduct(){
    let viewProductApi = "http://localhost:3000/product/product-list"
    return this.http.get<any>(viewProductApi);
  }
  public viewProductBySeller(){
    let viewProductBySellerApi = "http://localhost:3000/product/product-list-by-seller"
    return this.http.post<any>(viewProductBySellerApi,{creatorId: sessionStorage.getItem("_id")});
  }
  public viewProductById(productId:any){
    let viewProductByIdApi = "http://localhost:3000/product/product-by-id"
    return this.http.post<any>(viewProductByIdApi,{productId: productId});
  }

  public updateProduct(productDeatails:any){
    let updateProductApi = "http://localhost:3000/product/edit-product"
    return this.http.post<any>(updateProductApi,productDeatails);
  }

  public delete(productId:any){
    let deleteProductApi = "http://localhost:3000/product/delete-product"
    return this.http.post<any>(deleteProductApi,{productId:productId});
  }

  public viewCategory(){
    let viewcategoryApi = "http://localhost:3000/admin/category-list"
    return this.http.get<any>(viewcategoryApi);
  }
}