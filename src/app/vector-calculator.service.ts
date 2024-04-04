import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VectorCalculatorService {

  constructor() { }

  addVectors(vector1: number[], vector2: number[]): number[] {
    return vector1.map((value, index) => value + vector2[index]);
  }

  subtractVectors(vector1: number[], vector2: number[]): number[] {
    return vector1.map((value, index) => value - vector2[index]);
  }

  dotProduct(vector1: number[], vector2: number[]): number {
    return vector1.reduce((acc, value, index) => acc + value * vector2[index], 0);
  }
}
