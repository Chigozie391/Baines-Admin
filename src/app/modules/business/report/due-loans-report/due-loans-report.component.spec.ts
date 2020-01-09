import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueLoansReportComponent } from './due-loans-report.component';

describe('DueLoansReportComponent', () => {
  let component: DueLoansReportComponent;
  let fixture: ComponentFixture<DueLoansReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueLoansReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueLoansReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
