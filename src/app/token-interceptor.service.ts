import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { } intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log(localStorage.getItem('jwtToken'))
    let tokenizedRequest = req.clone({
        setHeaders:{
             authorization:'Bearer '+ localStorage.getItem('jwtToken')
        }

    });
    return next .handle(tokenizedRequest)
  }


}
