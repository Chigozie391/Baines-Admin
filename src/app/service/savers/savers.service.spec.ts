import { TestBed } from '@angular/core/testing';

import { SaversService } from './savers.service';

describe('SaversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaversService = TestBed.get(SaversService);
    expect(service).toBeTruthy();
  });
});
