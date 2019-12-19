import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsProductDetailsComponent } from './savings-product-details.component';

describe('SavingsProductDetailsComponent', () => {
  let component: SavingsProductDetailsComponent;
  let fixture: ComponentFixture<SavingsProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
