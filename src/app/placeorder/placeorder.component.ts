import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from '../buyer.service';
// import { Razorpay } from "razorpay"

declare let Razorpay: any;

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})


export class PlaceorderComponent implements OnInit {


  Mobile: any;
  Address: any;
  Pincode: any;
  Total: any = localStorage.getItem('total');
  UserId: any;
  ProductId: any;
  DATA: any

  constructor(private buyerService: BuyerService, private route: ActivatedRoute) { }

  placeOrder() {
    this.UserId = sessionStorage.getItem('_id');
    this.ProductId = this.route.snapshot.paramMap.get('id');
    this.Total = parseInt(this.Total)
    console.log(this.Total + "+++++++total");


    this.buyerService.placeOrderServ(this.UserId, this.ProductId, this.Mobile, this.Address, this.Total, this.Pincode).subscribe(data => {
      console.warn(data)
      this.DATA = data
      if (this.DATA.success) {

        console.log(data);
        console.log(this.Total);
        var options = {
          "key": "rzp_test_2ZGv8MA0qkfdTz", // Enter the Key ID generated from the Dashboard
          "amount": this.Total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Acme Corp",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "order_id": this.DATA.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "callback_url": "http://localhost:3000/order/order-status",
          "prefill": {
            "name": "Gaurav Kumar",
            "email": "rajkasotiya26@gmail.com",
            "contact": "7999800406"
          },
          "notes": {
            "address": "Razorpay Corporate Office"
          },
          "theme": {
            "color": "#3399cc"
          }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();

        window.alert("order placed");
      }
      else {
        window.alert("not placed")
      }
    })
  }

  ngOnInit(): void {
  }

}








// onPay() {
//   console.log("Inside onpay");
//   alert("come in")
//   console.log(data);
//   console.log(data.id);
//   var options = {
//     "key": "rzp_test_2ZGv8MA0qkfdTz", // Enter the Key ID generated from the Dashboard
//     "amount": this.Total + "00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp",
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//     "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "callback_url": "http://localhost:3000/order-status",
//     "prefill": {
//       "name": "Gaurav Kumar",
//       "email": "rajkasotiya26@gmail.com",
//       "contact": "7999800406"
//     },
//     "notes": {
//       "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//       "color": "#3399cc"
//     }
//   };
//   var rzp1 = new Razorpay(options);
//   rzp1.open();
// })
// }
