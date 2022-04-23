import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  addComplaintApi="https://real-bidhouse.herokuapp.com/complaint/add-complaint";
  viewComplaintApi="https://real-bidhouse.herokuapp.com/complaint/all-complaint-list";
  revertComplaintApi="https://real-bidhouse.herokuapp.com/complaint/revert-complaint";
  // viewComplaintApi="http://localhost:3000/complaint/all-complaint-list"
  // addcomplaintApi="http://localhost:3000/complaint/add-complaint";

  constructor(private http:HttpClient) { }

  public addComplaint(userId:any,complaintText:any){
     return this.http.post(this.addComplaintApi,{userId:userId,complaintText:complaintText})
  }

  public viewComplaint(){
    return this.http.get(this.viewComplaintApi)
  }

  public revertComplaint(userId:any,replyText:any){
   return this.http.post(this.revertComplaintApi,{userId:userId,replyText:replyText})
  }

}
