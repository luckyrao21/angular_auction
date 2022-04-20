import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList:any;

  constructor(private _service:CategoryService) { }

  public deletecategory(id:any){
    if(confirm("Are you sure ?")){
      console.log("hello");
        this._service.removecategory(id).subscribe(data=>{
      if(data.success=="success"){
        alert("category  deleted")
        this.ngOnInit()
      }
      else{
        alert("category not deleted")
      }
    }    
    )}
  }
    ngOnInit(): void{ 
   
      this._service.getCategoryList().subscribe(data=>{
          console.log(data);
          if(data.message=="unautgorized request"){
            alert("unautgorized request");
          }
          else{
            this.categoryList=data;
          }
      })
    }
  }