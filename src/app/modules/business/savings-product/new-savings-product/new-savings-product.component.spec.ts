import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSavingsProductComponent } from './new-savings-product.component';

describe('NewSavingsProductComponent', () => {
  let component: NewSavingsProductComponent;
  let fixture: ComponentFixture<NewSavingsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSavingsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSavingsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
