import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Address } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }

  placeOrderApi="http://localhost:3000/order/place-order";

  public placeOrderServ(userId:any,productId:any,mobile:any,address:any,total:any,pincode:any){
        return this.http.post(this.placeOrderApi,{userId:userId,productId:productId,mobile:mobile,address:address,total:total,pincode:pincode})
  }

}
