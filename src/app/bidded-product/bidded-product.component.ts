import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../bid.service';

@Component({
  selector: 'app-bidded-product',
  templateUrl: './bidded-product.component.html',
  styleUrls: ['./bidded-product.component.css']
})
export class BiddedProductComponent implements OnInit {
  dataList: any;
  customer = sessionStorage.getItem('_id');
  constructor(private Bid: BidService, private router: Router) {
    if (sessionStorage.getItem('_id')) {
      this.Bid.biddedProduct(sessionStorage.getItem('_id')).subscribe(data => {
        this.dataList = data;
      });
    }
  }

  public placeOrder(productId: any, total: any) {
    // localStorage.setItem(productId, "productId");
    localStorage.setItem("total", total);

    this.router.navigate(['bidded-product/place-order/' + productId]);
  }

  ngOnInit(): void {
  }

}
