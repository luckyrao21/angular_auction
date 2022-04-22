import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string= "";
  password:string= "";
  currentUser:any;
 constructor(private _service:VerificationService,private _router:Router) { }
 public signin(){
    this._service.signin(this.email,this.password).subscribe(data=>{
      console.log(data);
      if(data.err){
        alert("login Failed");
      }
      else{
        console.log("login")
        localStorage.setItem('jwtToken',data.token);
        sessionStorage.setItem('_id',data.data._id);
        sessionStorage.setItem('customerType', data.data.customerRoll);
        this.currentUser=data.currentUser;

        alert("Login Successfully...");
        this._router.navigate(['/']);

      }

     })
 }
  ngOnInit(): void {
  }

}
