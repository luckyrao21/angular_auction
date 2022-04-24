import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidService } from '../bid.service';

@Component({
  selector: 'app-view-bids',
  templateUrl: './view-bids.component.html',
  styleUrls: ['./view-bids.component.css']
})
export class ViewBidsComponent implements OnInit {
  productId: any;
  dataList?: any[];

  constructor(private Bid: BidService, private route: ActivatedRoute, private _router: Router) {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.Bid.viewBidOnProduct(this.productId).subscribe(data => {
      console.log(data.creator);
      if (!data.messege)
        this.dataList = data.creator
      else {
        alert("No Bid On This Product");
        _router.navigate(["/view-product-by-seller"]);
      }

    });
  }

  public lockedTheBid(buyersId: any) {
    console.log(buyersId);
    this.Bid.lockBid(this.productId, buyersId).subscribe(data => {
      console.log(data);
      if (data.success)
        alert("Notificatione sent to the user");
      else if (data.messege)
        alert("Already sent notification");
      else
        alert("Something went wrong.Try again later");
    });

  }

  ngOnInit(): void {
  }

}
