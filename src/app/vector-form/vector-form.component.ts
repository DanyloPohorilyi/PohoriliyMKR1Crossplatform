import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VectorOperationResult } from '../tab1/interface/vector-operation-result.interface';
import { VectorCalculatorService } from '../vector-calculator.service';

@Component({
  selector: 'app-vector-form',
  templateUrl: './vector-form.component.html',
  styleUrls: ['./vector-form.component.scss'],
})
export class VectorFormComponent implements OnInit {
  vectorForm!: FormGroup;
  vectorControls1: string[] = [];
  vectorControls2: string[] = [];

  @Output() operationResult = new EventEmitter<VectorOperationResult>();

  constructor(private formBuilder: FormBuilder, private vectorCalculatorService: VectorCalculatorService) { }

  ngOnInit(): void {
    this.vectorForm = this.formBuilder.group({
      dimensions: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
      operation: ['', Validators.required],
    });

    this.vectorForm.get('dimensions')?.valueChanges.subscribe((dimensions) => {
      this.vectorControls1 = Array.from({ length: dimensions }, (_, i) => `vector1_coord${i + 1}`);
      this.vectorControls2 = Array.from({ length: dimensions }, (_, i) => `vector2_coord${i + 1}`);
      this.buildVectorControls();
    });
  }

  buildVectorControls(): void {
    const formGroup = this.vectorForm.controls;
    this.vectorControls1.forEach((controlName) => {
      if (!formGroup[controlName]) {
        formGroup[controlName] = this.formBuilder.control('', Validators.required);
      }
    });
    this.vectorControls2.forEach((controlName) => {
      if (!formGroup[controlName]) {
        formGroup[controlName] = this.formBuilder.control('', Validators.required);
      }
    });
  }

  onSubmit(): void {
    if (this.vectorForm.valid) {
      const operation = this.vectorForm.get('operation')?.value;
      const vector1Values = this.vectorControls1.map((control) => this.vectorForm.value[control]);
      const vector2Values = this.vectorControls2.map((control) => this.vectorForm.value[control]);

      let result: number | number[] = [];

      switch (operation) {
        case 'addition':
          result = this.vectorCalculatorService.addVectors(vector1Values, vector2Values);
          break;
        case 'subtraction':
          result = this.vectorCalculatorService.subtractVectors(vector1Values, vector2Values);
          break;
        case 'dotProduct':
          result = this.vectorCalculatorService.dotProduct(vector1Values, vector2Values);
          break;
        default:
          break;
      }

      // Перевіряю result і змінюю на масив, якщо це необхідно
      if (typeof result === 'number') {
        result = [result];
      }

      this.operationResult.emit({
        operation: operation,
        vector1Values: vector1Values,
        vector2Values: vector2Values,
        result: result,
      });
    }
  }



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
