import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueLoansReportComponent } from './overdue-loans-report.component';

describe('OverdueLoansReportComponent', () => {
  let component: OverdueLoansReportComponent;
  let fixture: ComponentFixture<OverdueLoansReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueLoansReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueLoansReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
