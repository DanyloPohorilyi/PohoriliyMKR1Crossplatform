import { TestBed, inject } from '@angular/core/testing';
import { VectorCalculatorService } from './vector-calculator.service';

describe('VectorCalculatorService', () => {
  let service: VectorCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VectorCalculatorService]
    });
    service = TestBed.inject(VectorCalculatorService);
  });

  it('повинен коректно додати два вектори', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];
    const expected = [5, 7, 9];
    const result = service.addVectors(vector1, vector2);
    expect(result).toEqual(expected);
  });
});
