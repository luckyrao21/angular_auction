import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  username:any=""
  email:any=""
  password:any=""
  mobile:any=""
  address:any=""
  customerRoll:any=""
  datalist:any

  constructor(private service:SellerService) {

    service.showOneCustomerDetail().subscribe(data=>{
      console.warn(data)
     this.datalist=data;
     this.username=this.datalist.username
     this.email=this.datalist.email
     this.password=this.datalist.password
     this.mobile=this.datalist.mobile
     this.address=this.datalist.address
     this.customerRoll=this.datalist.customerRoll
    })
   }

  ngOnInit(): void {
  }
  public updateProfile(){
    this.service.updateProfile(this.username,this.email,this.password,this.mobile,this.address,this.customerRoll).subscribe(data=>{
      alert("register success")
      console.warn(data)
    })

  }


}
