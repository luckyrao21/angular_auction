import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from './verification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-auction-angular';
  data:any;
  constructor(private _router:Router){
    this.data = _router.getCurrentNavigation()?.extras.state
  }
  // public customerType():boolean{

  //   if(sessionStorage.getItem('customerType') == "Buyer")
  //       return true
  //   else
  //      return false
  // }
  // public isloggedIn(){
  //   if(localStorage.getItem('jwtToken'))
  //     return true
  //   else
  //     return false
  // }
}
