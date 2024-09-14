import { Component, input, InputSignal, output, OutputOptions, signal, ViewChild } from '@angular/core';
import { Calendar, CalendarModule } from 'primeng/calendar';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import { LowerCasePipe } from '@angular/common';
import { validCond } from '../../../core/models/auth.interface';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'datepicker',
  standalone: true,
  imports: [CalendarModule,LowerCasePipe,IconComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  disabled: InputSignal<boolean> = input<boolean>(false);
  isRequired: InputSignal<boolean> = input<boolean>(false);
  isValid:InputSignal<validCond> = input<validCond>({cond1:false,form_submit:false})
  datLabel: InputSignal<string> = input<string>('');
  validText: InputSignal<string> = input<string>('');
  value: InputSignal<string> = input<string>('');
  max: InputSignal<Date> = input<Date>(new Date());
  dateChng = output<string>({alias:'date'})
  
  public readonly isMobile = signal<boolean>(false);
  
  
  @ViewChild('calendar') calendar!: Calendar;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }

  ngOnInit(): void {}

  public valChang(value:any){
    this.dateChng.emit(value)
  }

  public openCalendar() {
    const calendarInput = this.calendar.inputfieldViewChild?.nativeElement;
    calendarInput.focus();  // Focus on the input field to trigger the calendar popup
  }
}
