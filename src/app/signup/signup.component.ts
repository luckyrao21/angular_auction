import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../verification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:String=""
  email:String=""
  password:String=""
  mobile:Number=0;
  address:String=""
  customerRoll:String=""

  constructor(private _service:VerificationService,private _router:Router) {

   }
   public signup(){
     console.log("Signup");
     this._service.signup(this.username,this.email,this.password,this.mobile,this.address,this.customerRoll).subscribe(data=>{
      console.log(this.username);
      console.log(this.email);
      console.log(this.password);
      console.log(this.mobile);
      console.log(this.address);
      console.log(this.customerRoll);



      console.log(data);
        if(data.err){
         alert('SignUp Failed')
       }
       else{
         console.log(data)
       alert('SignUp Success')
      }
     })
   }
  ngOnInit(): void {
  }

}
