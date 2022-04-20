import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private ImageUrl:UserserviceService) { }

  ngOnInit(): void {

  }
  categoryName = ""
  categoryImage: any = ""
  Data: any = ""
  addcategory() {
    const formData = new FormData();
    formData.append("categoryName", this.categoryName);
    formData.append("categoryImage", this.categoryImage);
    this.ImageUrl.addcategory(formData).subscribe(data => {
      this.Data = data
      if (this.Data.err) {
        alert("category not added");
      }
      else {
        alert("category added");
      }
      console.log(data);
    });
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      this.categoryImage = event.target.files[0];
    }
  }
}










