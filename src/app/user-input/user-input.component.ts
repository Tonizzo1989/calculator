import { investmentService } from './../investment.service';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestement = signal('0');
  enteredAnnualInvestement = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');

  constructor(private investmentService: investmentService) {}

  onSubmit() {
    this.investmentService.OnCalculateInvestmentResults({
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
