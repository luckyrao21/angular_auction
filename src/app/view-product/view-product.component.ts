import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  dataList: any[] = [];
  deadLinehours: any;
  deadMinutes: any;

  constructor(private product: ProductService) {
    this.product.viewProduct().subscribe(data => {
      console.log(data);
      this.dataList = data
    });
  }

  public beforeStarting(startTime: any): boolean {
    let temp = Date.parse(startTime);
    if (Date.now() <= temp) {
      // let times = startTime.split(' ');
      // let time = times[1].split(':');
      // // console.log(parseInt(time[1]));

      // let date = new Date();
      // let hours = date.getHours();
      // let minutes = date.getMinutes();

      // this.deadLinehours = parseInt(time[0]) - hours;

      // if (minutes > parseInt(time[1]))
      //   this.deadMinutes = minutes - parseInt(time[1]);
      // else
      //   this.deadMinutes = parseInt(time[1]) - minutes;

      // console.log(this.deadLinehours + ":" + this.deadMinutes);

      return true

    }
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
