import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { tableColuType } from '../../models/shared.interface';
import { IconComponent } from '../icon/icon.component';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'table',
  standalone: true,
  imports: [CommonModule, TableModule, IconComponent, MenuModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  cols = input.required<tableColuType[]>();
  data = input.required<any[]>();

  constructor() { }

  items: any[] | undefined;

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Edit',
            icon: 'more'
          },
          {
            label: 'Delete',
            icon: 'more'
          }
        ]
      }
    ];
  }
}
