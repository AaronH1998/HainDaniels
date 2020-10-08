import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsFieldComponent } from './product-details-field.component';

describe('ProductDetailsFieldComponent', () => {
  let component: ProductDetailsFieldComponent;
  let fixture: ComponentFixture<ProductDetailsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
