import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendersViewComponent } from './lenders-view.component';

describe('LendersViewComponent', () => {
  let component: LendersViewComponent;
  let fixture: ComponentFixture<LendersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
