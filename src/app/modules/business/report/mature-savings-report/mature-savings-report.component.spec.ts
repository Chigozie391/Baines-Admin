import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatureSavingsReportComponent } from './mature-savings-report.component';

describe('MatureSavingsReportComponent', () => {
  let component: MatureSavingsReportComponent;
  let fixture: ComponentFixture<MatureSavingsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatureSavingsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatureSavingsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
