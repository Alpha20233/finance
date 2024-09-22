import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetCardComponent } from "../../../../shared/components/budget-card/budget-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [BudgetCardComponent,CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {}
