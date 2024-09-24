import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal, OnInit, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { tableColuType } from '../../models/shared.interface';
import { IconComponent } from '../icon/icon.component';
import { MenuModule } from 'primeng/menu';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LottieSerService } from '../../services/lottie/lottie-ser.service';
import { ButtonComponent } from "../button/button.component";



@Component({
  selector: 'table',
  standalone: true,
  imports: [CommonModule, TableModule, IconComponent, MenuModule, LottieComponent, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class TableComponent implements OnInit {
  cols = input.required<tableColuType[]>();
  data = input.required<any[]>();
  selectCount = output<number>();
  hoveredItem: string | null = null;


  first = signal<number>(0);
  rows = signal<number>(8);

  
  constructor(public lottieService: LottieSerService) { }

  menuItems!: { label: string }[];

  options: AnimationOptions[] = [
    {
      path: '/json/edit.json',
      autoplay: false,
      loop: false
    },
    {
      path: '/json/trash.json',
      autoplay: false,
      loop: false
    },
  ];


  ngOnInit() {
    this.menuItems = [
      {
        label: 'Edit',
      },
      {
        label: 'Delete',
      }
    ];
  }

  abs(value: number): number {
    return Math.abs(value);
  }

  next() {
    this.first.set(this.first() + this.rows());
  }

  prev() {
    this.first.set(this.first() - this.rows());
  }
}
