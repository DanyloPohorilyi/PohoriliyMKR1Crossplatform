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

  it('повинен коректно обчислювати точковий добуток двох векторів', () => {
    const vector1 = [1, 2, 3];
    const vector2 = [4, 5, 6];
    const expected = 32;
    const result = service.dotProduct(vector1, vector2);
    expect(result).toEqual(expected);
  });
});
