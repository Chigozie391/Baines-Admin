import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavingsProductComponent } from './edit-savings-product.component';

describe('EditSavingsProductComponent', () => {
  let component: EditSavingsProductComponent;
  let fixture: ComponentFixture<EditSavingsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSavingsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSavingsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
