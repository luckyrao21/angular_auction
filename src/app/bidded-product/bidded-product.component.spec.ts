import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddedProductComponent } from './bidded-product.component';

describe('BiddedProductComponent', () => {
  let component: BiddedProductComponent;
  let fixture: ComponentFixture<BiddedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
