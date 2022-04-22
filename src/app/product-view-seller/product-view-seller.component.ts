import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view-seller',
  templateUrl: './product-view-seller.component.html',
  styleUrls: ['./product-view-seller.component.css']
})
export class ProductViewSellerComponent implements OnInit {
  dataList:any[] = []
  constructor(private product: ProductService) {
    this.product.viewProductBySeller().subscribe(data=>{
      this.dataList = data;
    });
  }

  ngOnInit(): void {
  }

  deleteProduct(productId:any, index:any){
    if(confirm("Are You Sure")){
      this.product.delete(productId).subscribe(data=>{
        if(data.Delete){
          data.slice(index,1)
           alert("Product Deleted Successfully...")
           this.ngOnInit();
        }
        else
           alert("Product Deleted Successfully...")
      });
    }
  }



}
