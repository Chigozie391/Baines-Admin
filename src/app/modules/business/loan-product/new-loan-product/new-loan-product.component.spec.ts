import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanProductComponent } from './new-loan-product.component';

describe('NewLoanProductComponent', () => {
  let component: NewLoanProductComponent;
  let fixture: ComponentFixture<NewLoanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoanProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoanProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
