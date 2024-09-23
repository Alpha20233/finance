import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DropdownComponent } from '../../../../../../shared/components/dropdown/dropdown.component';
import { ChartModule } from 'primeng/chart';
import { dropDownList } from '../../../../../../shared/models/shared.interface';

@Component({
  selector: 'trans-chart',
  standalone: true,
  imports: [CommonModule, DropdownComponent, ChartModule],
  templateUrl: './trans-chart.component.html',
  styleUrl: './trans-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransChartComponent {
  data: any;
  options: any;


  dropItemList = signal<dropDownList[]>([
    { name: 'Line chart', id: 1 ,icon:'bag'},
    { name: 'Bar chart', id: 2,icon:'bag' }
  ]);

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,

        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      },

    }

  }
}
