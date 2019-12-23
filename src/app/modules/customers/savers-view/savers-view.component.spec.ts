import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaversViewComponent } from './savers-view.component';

describe('SaversViewComponent', () => {
  let component: SaversViewComponent;
  let fixture: ComponentFixture<SaversViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaversViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaversViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
