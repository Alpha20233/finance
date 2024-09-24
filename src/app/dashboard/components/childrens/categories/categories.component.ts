import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetCardComponent } from '../../../../shared/components/budget-card/budget-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {}
