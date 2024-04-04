import { Component } from '@angular/core';
import { VectorOperationResult } from './interface/vector-operation-result.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  operationResults: VectorOperationResult[] = [];
  constructor() { }
  handleOperationResult(result: VectorOperationResult) {
    this.operationResults.push(result);
  }
}
