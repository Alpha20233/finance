import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { header } from '../../../models/header.interface';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';
import { DatepickerComponent } from '../../../../shared/components/datepicker/datepicker.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
    AvatarComponent,
    NgOptimizedImage,
    DropdownComponent,
    DatepickerComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public navList: header[] = [
    {
      name: 'Overview',
      link: '/dashboard/overview',
      isSelect: true,
    },
    {
      name: 'Transactions',
      link: '/dashboard/transactions',
      isSelect: false,
    },
    {
      name: 'Categories',
      link: '/dashboard/categories',
      isSelect: false,
    },
    {
      name: 'Settings',
      link: '/dashboard/settings',
      isSelect: false,
    },
  ];

  public btnSelect(btnName: string) {
    this.navList.map((item) =>
      item.name == btnName ? (item.isSelect = true) : (item.isSelect = false),
    );
  }
}
