import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewSellerComponent } from './product-view-seller.component';

describe('ProductViewSellerComponent', () => {
  let component: ProductViewSellerComponent;
  let fixture: ComponentFixture<ProductViewSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
