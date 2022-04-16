import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log(localStorage.getItem('jwtToken'))

    let tokenizedRequest=request.clone({
      setHeaders:{
        authorization:'Bearer '+localStorage.getItem('jwtToken')
      }
    })
    return next.handle(tokenizedRequest)
  }
}
