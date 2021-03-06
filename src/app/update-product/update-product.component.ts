import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productName: string = "";
  productCategory: string = '';
  productDesc: string = '';
  productInitialPrice: string = "";
  startDate: string = '';
  endDate: string = '';
  image: any = '';
  productImage:any;
  productId:any;
  oldImage:any;
  creator:any = sessionStorage.getItem('_id');
  categoryList:any;

  constructor(private route: ActivatedRoute, private router: Router, private product: ProductService) {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'))

    this.product.viewProductById(this.productId).subscribe(data=>{
      console.log(data);
       this.productName = data.productName;
       this.productCategory = data.categoryName;
       this.productDesc = data.productDesc;
       this.productInitialPrice = data.productInitialPrice;
       this.startDate = data.startTime;
       this.endDate = data.endTime;
       this.productImage = data.productImage;
       this.oldImage = data.productImage;
       this.image = data.productImage;
    });

    this.product.viewCategory().subscribe(data=>{
      if(!data.error){
        this.categoryList = data;
      }
   });
   }

  ngOnInit(): void {
  }

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

  public updateProduct(){
    const formData = new FormData();
    formData.append('productName',this.productName);
    formData.append('productDesc',this.productDesc);
    formData.append('productInitialPrice', this.productInitialPrice);
    // formData.append('creator',this.creator);
    formData.append('startTime',this.startDate);
    formData.append('endTime',this.endDate);
    formData.append('categoryName',this.productCategory);
    formData.append('productImage',this.productImage);
    formData.append('productId',this.productId);
    formData.append('oldImage',this.oldImage);

    console.log(this.productImage);


    this.product.updateProduct(formData).subscribe((data) => {
       if(data.message){
            // this.ngOnInit()
            alert('Product Updated Successfully..');
            // this.ngOnInit()
            this.router.navigate(['view-product-by-seller']);
       }
       else
            alert('Product Not Updated');
    });
  }

}
