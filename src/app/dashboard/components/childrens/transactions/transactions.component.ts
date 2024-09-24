import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SearchComponent } from "../../../../shared/components/search/search.component";
import { TableComponent } from '../../../../shared/components/table/table.component';
import { tableColuType, transTableData } from '../../../../shared/models/shared.interface';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ButtonComponent, CommonModule, IconComponent, SearchComponent, TableComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  cols = signal<tableColuType[]>([
    { field: 'date', header: 'Date' },
    { field: 'category', header: 'Category' },
    { field: 'payee', header: 'Payee' },
    { field: 'amt', header: 'Amount' },
    { field: 'type', header: 'Account' },
    { field: 'action', header: 'Action' },
  ]);

  tableData = signal<transTableData[]>([
    {
      id:1,
      date: '14 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
    {
      id:2,
      date: '18 Sep 2023',
      category: 'Rent',
      payee: 'deepesh',
      amt: 12000,
      type: 'checking'
    },
  ])
}
