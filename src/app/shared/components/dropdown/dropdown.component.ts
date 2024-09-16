import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  placeholder: InputSignal<string> = input.required<string>();

  dropList = signal<Array<{ name: string; id: number }>>([
    { name: 'Checking', id: 1 },
    { name: 'Saving', id: 2 },
  ]);

  selectedCity = model<{ name: string; id: number }>();

  ngOnInit(): void {}

  public selcChng(event: { name: string; id: number }) {
    this.selectedCity.set(event);
  }
}
