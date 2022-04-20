import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SellerService {

  constructor(private http:HttpClient) { }

  // updateProfileApi="https://eauction-api.herokuapp.com/customer/updateProfile"
  updateProfileApi= "http://localhost:3000/customer/updateProfile"

  viewOnecustomer="http://localhost:3000/admin/show-one-customer"

  forgotPasswordApi="http://localhost:3000/customer/forgot-password"

  // resetPasswordApi="http://localhost:3000/customer/reset-Password";

  public updateProfile(username:string,email:String,password:String,mobile:String,address:String,customerRoll:String){
    let cusotmerId = sessionStorage.getItem("_id");
    return this.http.post(this.updateProfileApi,{customerId:cusotmerId,username:username,email:email,password:password,mobile:mobile,address:address,customerRoll:customerRoll})
  }

  public showOneCustomerDetail(){
    let cusotmerId = sessionStorage.getItem("_id");
    return this.http.post(this.viewOnecustomer,{customerId:cusotmerId})
  }

  public forgotPassword(email:any){
    // let cusotmerId = sessionStorage.getItem("_id");
    return this.http.post(this.forgotPasswordApi,{email:email})
  }


  




}
