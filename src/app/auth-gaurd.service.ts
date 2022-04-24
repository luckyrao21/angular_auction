import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor( private route:Router) { }

  canActivate(): boolean{
    if(sessionStorage.getItem("_id")){
    return true
    }
    else{
      this.route.navigate(['signin'])
      return false
    }
  }
}
