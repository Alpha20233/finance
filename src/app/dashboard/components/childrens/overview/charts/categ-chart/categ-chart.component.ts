import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'categ-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categ-chart.component.html',
  styleUrl: './categ-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategChartComponent {

}
