import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'finance';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
