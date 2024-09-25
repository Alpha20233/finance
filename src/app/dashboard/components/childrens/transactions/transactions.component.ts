import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { SearchComponent } from '../../../../shared/components/search/search.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import {
  tableColuType,
  transTableData,
} from '../../../../shared/models/shared.interface';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LottieSerService } from '../../../../shared/services/lottie/lottie-ser.service';
import { SidebarModule } from 'primeng/sidebar';
import { DatepickerComponent } from '../../../../shared/components/datepicker/datepicker.component';
import { AddTransComponent } from "./add-trans/add-trans.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    SearchComponent,
    TableComponent,
    LottieComponent,
    SidebarModule,
    DatepickerComponent,
    AddTransComponent
],
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
      id: 1,
      date: '14 Sep 2023',
      category: 'Rent',
      payee: 'John Doe',
      amt: -12000,
      type: 'checking',
    },
    {
      id: 2,
      date: '18 Sep 2023',
      category: 'Groceries',
      payee: 'Walmart',
      amt: 250,
      type: 'credit',
    },
    {
      id: 3,
      date: '20 Sep 2023',
      category: 'Utilities',
      payee: 'Electric Company',
      amt: 150,
      type: 'checking',
    },
    {
      id: 4,
      date: '22 Sep 2023',
      category: 'Entertainment',
      payee: 'Cinema City',
      amt: 50,
      type: 'credit',
    },
    {
      id: 5,
      date: '25 Sep 2023',
      category: 'Dining',
      payee: 'Pizza Palace',
      amt: 75,
      type: 'checking',
    },
    {
      id: 6,
      date: '28 Sep 2023',
      category: 'Transportation',
      payee: 'Gas Station',
      amt: 60,
      type: 'credit',
    },
    {
      id: 7,
      date: '01 Oct 2023',
      category: 'Healthcare',
      payee: 'City Hospital',
      amt: 200,
      type: 'checking',
    },
    {
      id: 8,
      date: '03 Oct 2023',
      category: 'Shopping',
      payee: 'Amazon',
      amt: 120,
      type: 'credit',
    },
    {
      id: 9,
      date: '05 Oct 2023',
      category: 'Education',
      payee: 'Online Course',
      amt: 300,
      type: 'checking',
    },
    {
      id: 10,
      date: '08 Oct 2023',
      category: 'Fitness',
      payee: 'Gym Membership',
      amt: 80,
      type: 'credit',
    },
  ]);

  options: AnimationOptions = {
    path: '/json/trash.json',
    autoplay: false,
    loop: false,
  };

  rowSeleCount = signal<number>(0);
  sidebarVisible = signal<boolean>(false);

  constructor(public readonly lottieService: LottieSerService) {}
}
