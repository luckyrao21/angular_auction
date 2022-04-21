import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  constructor(private _Service:VerificationService,private _router:Router){}
  ngOnInit(): void {
  }

  public customerType():boolean{

    if(sessionStorage.getItem('customerType') == "Seller")
        return true
    else
       return false
  }
  public isLoggedIn(){
    if(sessionStorage.getItem('_id'))
      return true
    else
      return false
  }

  public signOut(){
    if(confirm('Are You Sure')){
      sessionStorage.clear();
      this._router.navigate(['/']);
    }

  }
}
