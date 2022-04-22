import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productName: string = "";
  productCategory: string = '';
  productDesc: string = '';
  productInitialPrice: string = "";
  startDate: string = '';
  endDate: string = '';
  image: any = '';
  productImage:any;
  categoryList:any[] = [];
  constructor(private product: ProductService) {
    this.product.viewCategory().subscribe(data=>{
       if(!data.error){
         this.categoryList = data;
       }
    });
  }

  ngOnInit(): void {}

  public onSelect(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      this.productImage = e.target.files[0];
      // console.log(this.productImage + '              Image');
    }
  }

  public addNewProduct() {
    const formData = new FormData();
    formData.append('productName',this.productName);
    formData.append('productDesc',this.productDesc);
    formData.append('productInitialPrice', this.productInitialPrice);
    formData.append('creator',"624ed1ba90660765236fe26a");
    formData.append('startTime',this.startDate);
    formData.append('endTime',this.endDate);
    formData.append('categoryName',this.productCategory);
    formData.append('productImage',this.productImage);

    this.product.addProduct(formData).subscribe((data) => {
       if(data.data){
            // this.ngOnInit()
            alert('Product Added Successfully..');
            this.ngOnInit()
       }
       else
            alert('Product Not Added');

    });
  }
}
