import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {


  Mobile:any;
  Address:any;
  Pincode:any;
  Total:any;
  UserId:any;
  ProductId:any;
  DATA:any

  constructor(private buyerService:BuyerService) { }

  placeOrder(){
   this.UserId=sessionStorage.getItem('userId');
   this.ProductId=sessionStorage.getItem('productId')
   console.log(this.ProductId);

    this.buyerService.placeOrderServ(this.UserId,this.ProductId,this.Mobile,this.Address,this.Pincode,this.Total).subscribe(data=>{
      console.warn(data)
      this.DATA=data
      if(this.DATA.success){
          window.alert("order placed")
      }
      else{
        window.alert("not placed")
      }
    })
  }

  ngOnInit(): void {
  }

}
