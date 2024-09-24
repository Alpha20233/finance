import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  private dateSubject = new Subject<Date>();
  date$ = this.dateSubject.asObservable();

  public isMobile(): Observable<boolean> {
    return this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map((result) => !result.matches));
  }

  public updateDate(date: Date) {
    this.dateSubject.next(date);
  }
}
