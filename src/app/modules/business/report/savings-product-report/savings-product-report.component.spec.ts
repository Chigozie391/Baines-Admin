import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsProductReportComponent } from './savings-product-report.component';

describe('SavingsProductReportComponent', () => {
  let component: SavingsProductReportComponent;
  let fixture: ComponentFixture<SavingsProductReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsProductReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsProductReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
