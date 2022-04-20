import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  Email:any;
  Data:any;

  constructor(private serv:SellerService) { }

  ngOnInit(): void {
  }

  public resetPassword(){
    this.serv.forgotPassword(this.Email).subscribe(data=>{
      this.Data=data
      if(this.Data.success){
        alert("Password Sent to your Email")
      }
      else{
        alert("Email not found")
      }
    })


  }

}
