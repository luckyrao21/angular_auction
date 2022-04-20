import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { observable}  from 'rxjs';

@Injectable()
export class UserserviceService {
  constructor(private _http:HttpClient) { }


  addcategory(formData: FormData) {
  let Api = "http://localhost:3000/admin/add";
    return this._http.post<any>(Api, formData);
  }

  public checkToken():boolean{
    return !!localStorage.getItem("jwtToken");
  }
}