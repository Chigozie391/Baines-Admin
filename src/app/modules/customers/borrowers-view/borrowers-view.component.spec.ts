import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersViewComponent } from './borrowers-view.component';

describe('BorrowersViewComponent', () => {
  let component: BorrowersViewComponent;
  let fixture: ComponentFixture<BorrowersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
