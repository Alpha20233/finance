import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, model, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule,IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit {
  placeholder: InputSignal<string> = input.required<string>();

  dropList = signal<{ name: string; id: number}[]>([
    { name: 'All account', id: 1 },
    { name: 'Checking', id: 2 },
    { name: 'Saving', id: 3 },
  ]);

  selectedCity = model<{ name: string; id: number }>({name: 'All account', id: 1});

  ngOnInit(): void {}

  public selcChng(event: { name: string; id: number }) {
    this.selectedCity.set(event);
  }
}
