import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-revert-complaint',
  templateUrl: './revert-complaint.component.html',
  styleUrls: ['./revert-complaint.component.css']
})
export class RevertComplaintComponent implements OnInit {

  customerId:any;
  revertMessage:any;
  DATA:any
  constructor(private activateRout:ActivatedRoute,private service:AdminService) {
   this.customerId= this.activateRout.snapshot.paramMap.get('id')
   console.log(this.customerId);

  }

  public sendRevert(){
      this.service.revertComplaint(this.customerId,this.revertMessage).subscribe(data=>{
        console.log(data);
        this.DATA=data;
        if(this.DATA.success){
          alert("reverted successfully")
        }else{
          alert("revert unsuccessfully")
        }
      })
  }

  ngOnInit(): void {
  }

}
