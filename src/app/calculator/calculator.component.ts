import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  count = 0;

  counter(type:string) {
    type==="add" ? this.count++ : this.count--;
    
  }
}
