import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaverDetailsComponent } from './saver-details.component';

describe('SaverDetailsComponent', () => {
  let component: SaverDetailsComponent;
  let fixture: ComponentFixture<SaverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
