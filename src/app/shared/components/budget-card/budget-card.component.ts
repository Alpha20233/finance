import { CommonModule, DecimalPipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  OnInit,
  signal,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { budgetTitle } from '../../models/shared.interface';
import { IconComponent } from '../icon/icon.component';
import { count, single, Subject, takeUntil } from 'rxjs';
import { CommService } from '../../services/common/comm.service';
import { CountUpDirective, CountUpModule } from 'ngx-countup';

@Component({
  selector: 'budget-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, IconComponent, CountUpModule],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetCardComponent implements OnInit, OnDestroy {
  title: InputSignal<budgetTitle> = input.required<budgetTitle>();
  amt: InputSignal<number> = input.required<number>();
  lastMonAmt: InputSignal<number> = input.required<number>();
  addCls: InputSignal<string> = input<string>('');
  filtDate = signal<Date[]>([
    new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      new Date().getDate(),
    ),
    new Date(),
  ]);

  periodCompaPercent = computed(() => {
    return Math.round(
      ((this.lastMonAmt() - this.amt()) / this.lastMonAmt()) * 100,
    );
  });

  private destroy$ = new Subject<void>();
  readonly Math = Math;
  readonly currYear = new Date().getFullYear();

  finalCount = signal<number>(1000);

  constructor(private readonly comm: CommService) {}

  ngOnInit() {
    this.comm.date$.pipe(takeUntil(this.destroy$)).subscribe((dateRange) => {
      if (Array.isArray(dateRange) && dateRange.length === 2) {
        this.filtDate.set([dateRange[0], dateRange[1]]);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
