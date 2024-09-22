import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trans-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trans-chart.component.html',
  styleUrl: './trans-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransChartComponent {

}
