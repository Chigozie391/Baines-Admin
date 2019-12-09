import { TestBed } from '@angular/core/testing';

import { BorrowersService } from './borrowers.service';

describe('BorrowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowersService = TestBed.get(BorrowersService);
    expect(service).toBeTruthy();
  });
});
