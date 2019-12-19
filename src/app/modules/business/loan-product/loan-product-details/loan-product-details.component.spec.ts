import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductDetailsComponent } from './loan-product-details.component';

describe('LoanProductDetailsComponent', () => {
  let component: LoanProductDetailsComponent;
  let fixture: ComponentFixture<LoanProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
