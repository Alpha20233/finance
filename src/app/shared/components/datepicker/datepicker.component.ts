import { Component, input, InputSignal, signal } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'datepicker',
  standalone: true,
  imports: [CalendarModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  disabled: InputSignal<boolean> = input<boolean>(false);
  min: InputSignal<Date> = input<Date>(new Date());
  isMobile = signal<boolean>(false);

  // constructor(private breakpointObserver: BreakpointObserver) {
  //   this.breakpointObserver.observe([
  //     Breakpoints.Handset
  //   ]).subscribe(result => {
  //     this.isMobile = result.matches;
  //   });
  // }
}
