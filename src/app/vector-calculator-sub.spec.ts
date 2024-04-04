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

  it('повинен коректно віднімати два вектори', () => {
    const vector1 = [4, 5, 6];
    const vector2 = [1, 2, 3];
    const expected = [3, 3, 3];
    const result = service.subtractVectors(vector1, vector2);
    expect(result).toEqual(expected);
  });
});
