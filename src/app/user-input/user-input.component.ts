import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();
  enteredInitialInvestement = signal('0');
  enteredAnnualInvestement = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestement(),
      annualInvestment: +this.enteredAnnualInvestement(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
    });
    this.enteredAnnualInvestement.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
    this.enteredInitialInvestement.set('0');
  }
}
