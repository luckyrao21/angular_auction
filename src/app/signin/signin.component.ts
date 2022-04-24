import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService } from '../verification.service';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  collect:any=""
  email:string= "";
  password:string= "";
  currentUser:any

 constructor(private _service:VerificationService,private _router:Router,private service:SocialAuthService) { }
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

googleSignin(){
  this.service.signIn(GoogleLoginProvider.PROVIDER_ID)
  this.service.authState.subscribe(data=>{
    console.log(data);
    // this.name=data.name;
    // this.email=data.email;
    // this.image=data. photoUrl;
    this.collect=data
    if(this.collect.err){
        alert("login failed")
    }
    else{
      sessionStorage.setItem('_id',this.collect.id)
      alert("Login Successfully...");
      this._router.navigate(['/']);
    }

  })
}


  ngOnInit(): void {
  }

}
