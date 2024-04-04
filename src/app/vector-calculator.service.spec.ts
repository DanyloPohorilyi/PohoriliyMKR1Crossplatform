import { TestBed } from '@angular/core/testing';

import { VectorCalculatorService } from './vector-calculator.service';

describe('VectorCalculatorService', () => {
  let service: VectorCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VectorCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
