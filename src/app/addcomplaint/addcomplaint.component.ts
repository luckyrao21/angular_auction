import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css']
})
export class AddcomplaintComponent implements OnInit {

  constructor(private adminServ:AdminService) { }

  userId:any;
  complaintText:any;
  DATA:any

  ngOnInit(): void {
  }

  public addCMP(){
    this.userId=sessionStorage.getItem("userId")
      this.adminServ.addComplaint(this.userId,this.complaintText).subscribe(data=>{
        console.log(data)
        this.DATA=data
        if(this.DATA.success){
          alert("Thanks for Complaint")
        }
        else{
            alert("oops something went wrong")
        }
      })
  }

}
