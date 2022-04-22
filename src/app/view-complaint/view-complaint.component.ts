import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  dataList:any

  ngOnInit(): void {
      this.adminService.viewComplaint().subscribe(data=>{
        this.dataList = data
      })

      

  }





}
