import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }

  public addBid(productId:any,buyersId:any,priceValue:any){
    let addBidApi = "https://real-bidhouse.herokuapp.com/bid/add-bid"
    return this.http.post<any>(addBidApi,{productId: productId, buyersId: buyersId, priceValue: priceValue});
  }

  public viewBidOnProduct(productId:any){
    let viewBidOnProductApi = "https://real-bidhouse.herokuapp.com/bid/view-OneProduct-bidlist"
    return this.http.post<any>(viewBidOnProductApi,{productId: productId});
  }
}
