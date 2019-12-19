import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsProductComponent } from './savings-product.component';

describe('SavingsProductComponent', () => {
  let component: SavingsProductComponent;
  let fixture: ComponentFixture<SavingsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
