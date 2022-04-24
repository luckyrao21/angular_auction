import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidService } from '../bid.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-particular-product',
  templateUrl: './particular-product.component.html',
  styleUrls: ['./particular-product.component.css']
})
export class ParticularProductComponent implements OnInit {
  array = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 7500, 8000, 8500, 9000, 9500, 10000, 15000, 20000
  ]

  bidPrice: any;
  similarList: any[] = [];
  clickedProduct: any;
  productId: any;
  data: any;

  constructor(private product: ProductService, private activatedRout: ActivatedRoute, private Bid: BidService) {
    this.productId = this.activatedRout.snapshot.paramMap.get('id');
    this.product.viewProductById(this.productId).subscribe(data => {
      if (!data.message) {
        this.clickedProduct = data;
        this.bidPrice = this.clickedProduct.productInitialPrice;
        this.data = this.clickedProduct.productInitialPrice;

        this.product.viewProductByCategory(data.categoryName, this.productId).subscribe(data => {
          console.log(data);
          this.similarList = data
        });

      }
    });
    console.log(this.clickedProduct + " product");
  }

  public addNewBid() {
    this.Bid.addBid(this.productId, sessionStorage.getItem('_id'), this.bidPrice).subscribe(data => {
      console.log(data);
      if (data.succes) {
        alert("Bid Request Sent..");
      }
      else
        alert("Some Thing Went Wrong...Please Try After Few Minutes");
    });
  }

  public beforeStarting(startTime: any): boolean {
    let temp = Date.parse(startTime);
    if (Date.now() <= temp)
      return true
    else
      return false
  }

  public afterStarting(startTime: any, endTime: any): boolean {
    let startTemp = Date.parse(startTime);
    let endTemp = Date.parse(endTime);

    if (Date.now() >= startTemp && Date.now() <= endTemp)
      return true
    else
      return false
  }

  ngOnInit(): void {
  }

}
