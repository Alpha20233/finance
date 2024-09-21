import { CommonModule } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { budgetTitle } from '../../models/shared.interface';

@Component({
  selector: 'budget-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss'
})
export class BudgetCardComponent {
  title:InputSignal<budgetTitle> = input.required<budgetTitle>()
}
