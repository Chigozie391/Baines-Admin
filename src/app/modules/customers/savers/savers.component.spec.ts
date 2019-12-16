import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaversComponent } from './savers.component';

describe('SaversComponent', () => {
  let component: SaversComponent;
  let fixture: ComponentFixture<SaversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
