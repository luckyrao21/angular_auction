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
  public isLoggedIn():boolean{
    if(this._Service.CheckToken())
       return true
    else
      return false    
  }

  ngOnInit(): void {
  }

}
