import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  InputSignal,
  output,
  OutputOptions,
  signal,
  ViewChild,
} from '@angular/core';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { AsyncPipe, CommonModule, LowerCasePipe } from '@angular/common';
import { validCond } from '../../../core/models/auth.interface';
import { IconComponent } from '../icon/icon.component';
import { CommService } from '../../services/common/comm.service';
import { selectionMode } from '../../models/shared.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'datepicker',
  standalone: true,
  imports: [
    CalendarModule,
    LowerCasePipe,
    IconComponent,
    CommonModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  disabled: InputSignal<boolean> = input<boolean>(false);
  isRequired: InputSignal<boolean> = input<boolean>(false);
  selectionMode: InputSignal<selectionMode> = input<selectionMode>('single');
  isValid: InputSignal<validCond> = input<validCond>({
    cond1: false,
    form_submit: false,
  });
  datLabel: InputSignal<string> = input<string>('');
  placeholder: InputSignal<string> = input.required<string>();
  validText: InputSignal<string> = input<string>('');
  addCls: InputSignal<string> = input<string>('');
  max: InputSignal<Date> = input<Date>(new Date());
  dateChng = output<string>({ alias: 'date' });

  dateSingleValue = signal<string>('');
  dateRangeValue = signal<Date[]>([
    new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      new Date().getDate(),
    ),
    new Date(),
  ]);

  private readonly baseClass =
    '!tw-text-sm tw-transition-all tw-duration-200 tw-ease-in placeholder:tw-text-[13px] placeholder:tw-text-slate-500';
  private readonly modeSingleClass =
    'tw-p-[0.4rem] tw-text-black tw-rounded-xl tw-border-2 tw-border-stroke-100 tw-ring-offset-2  focus:tw-border-azure-500 focus:tw-ring-2 focus:tw-ring-azure-200  tw-px-4';
  private readonly modeRangeClass =
    'tw-bg-azure-400/60 tw-border-none tw-h-10 !tw-shadow-none tw-text-white placeholder:tw-text-white placeholder:!tw-text-sm';

  styleClass = computed(() => {
    const classes = [this.baseClass,this.addCls()];
    if (this.selectionMode() === 'single') classes.push(this.modeSingleClass);
    if (this.disabled()) classes.push('tw-pointer-events-none');
    if (this.selectionMode() === 'range') classes.push(this.modeRangeClass);
    return classes.join(' ');
  });

  @ViewChild('calendar') calendar!: Calendar;

  constructor(public readonly comm: CommService) {}

  dateChange(value: any) {
    console.warn('value', value);
    this.dateSingleValue.set(value);
    if (
      this.selectionMode() === 'range' &&
      value[0] !== null &&
      value[1] !== null
    ) {
      this.dateRangeValue.set(value);
      this.comm.updateDate(value);
    }
    this.dateChng.emit(value);
  }

  openCalendar() {
    this.calendar.inputfieldViewChild?.nativeElement.focus();
  }
}
