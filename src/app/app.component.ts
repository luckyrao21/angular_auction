import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-auction-angular';
  constructor(private _service:UserserviceService,private _router:Router){}

  public checkToken(): boolean {
    if (this._service.checkToken())
      return true;
    else
      return false;
  }
}
