import { TestBed } from '@angular/core/testing';

import { SavingsProductService } from './savings-product.service';

describe('SavingsProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavingsProductService = TestBed.get(SavingsProductService);
    expect(service).toBeTruthy();
  });
});
