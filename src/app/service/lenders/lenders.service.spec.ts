import { TestBed } from '@angular/core/testing';

import { LendersService } from './lenders.service';

describe('LendersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LendersService = TestBed.get(LendersService);
    expect(service).toBeTruthy();
  });
});
