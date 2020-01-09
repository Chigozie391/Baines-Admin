import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductReportComponent } from './loan-product-report.component';

describe('LoanProductReportComponent', () => {
  let component: LoanProductReportComponent;
  let fixture: ComponentFixture<LoanProductReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanProductReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
