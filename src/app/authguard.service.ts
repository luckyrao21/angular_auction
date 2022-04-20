import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _service:UserserviceService,private router:Router){

  }
  canActivate()
  {
    if(this._service.checkToken())
    return true;
  else
    return false;
  }

}