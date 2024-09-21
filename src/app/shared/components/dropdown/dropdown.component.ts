import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, model, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
  placeholder: InputSignal<string> = input.required<string>();

  dropList = signal<{ name: string; id: number }[]>([
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
