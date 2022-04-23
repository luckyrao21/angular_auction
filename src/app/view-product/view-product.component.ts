import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  dataList: any[] = [];

  constructor(private product: ProductService) {
    this.product.viewProduct().subscribe(data => {
      console.log(data);
      this.dataList = data
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
