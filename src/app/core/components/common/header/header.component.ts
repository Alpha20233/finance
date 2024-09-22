import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { header } from '../../../models/header.interface';
import { Router, RouterLink } from '@angular/router';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';
import { DatepickerComponent } from '../../../../shared/components/datepicker/datepicker.component';
import { CommService } from '../../../../shared/services/common/comm.service';

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

  constructor(private readonly route: Router,private readonly comm:CommService) { }

  ngOnInit(): void {
    const routePath = this.route.url.replace('/dashboard/', '');
    const capitalizedPath = this.capitalizeFirstLetter(routePath);
    this.setActiveButton(capitalizedPath);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  setActiveButton(btnName: string) {
    this.navList.map((item) =>
      item.name == btnName ? (item.isSelect = true) : (item.isSelect = false),
    );
  }

  datChange(date: string) {
   
  }
}
