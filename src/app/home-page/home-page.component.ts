import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data:any;

  customerRole:any;

  constructor(private _router:Router){
     this.customerRole=sessionStorage.getItem('customerType');
    this.data = _router.getCurrentNavigation()?.extras.state
    // alert(this._router.url);

  }
  ngOnInit(): void {
  }

  public customerType():boolean{

    if(sessionStorage.getItem('customerType') == "Buyer")
        return true
    else
       return false
  }

}
