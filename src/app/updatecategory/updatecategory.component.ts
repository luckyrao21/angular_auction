import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  categoryName :any = ""
  categoryImage: any = ""
  Data: any = ""
  image:any;
  categoryId:any;
  constructor(private service:CategoryService, private route: ActivatedRoute) {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.service.fetchById(this.categoryId).subscribe(data=>{
       this.categoryName = data.categoryName;
       this.categoryImage = data.categoryImage;
      console.log(data)
      console.log(this.categoryId+"==============Id")

    });
   }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      this.categoryImage = e.target.files[0];
       console.log(this.categoryImage + '              Image');
    }
  }

  update() {
    const formData = new FormData();
    formData.append("categoryName", this.categoryName);
    formData.append("categoryImage", this.categoryImage);
    this.service.updatecategory(formData).subscribe(data => {
      this.Data = data
      if (this.Data.err) {
        alert("category not updated");
      }
      else {
        alert("category updated");
      }
      console.log(data);
    });
  }
}