import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, model, signal, OnInit, ChangeDetectionStrategy, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { IconComponent } from '../icon/icon.component';
import { dropDownList, dropVariType } from '../../models/shared.interface';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule, IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DropdownComponent implements OnInit {
  placeholder: InputSignal<string> = input.required<string>();
  dropList: InputSignal<dropDownList[]> = input.required<dropDownList[]>();
  selectItem: InputSignal<dropDownList> = input.required<dropDownList>();
  type: InputSignal<dropVariType> = input<dropVariType>('solid');
  selectedItemModel = model<dropDownList>();

  styleClass = computed(() => {
    const classes = ['tw-min-w-40 tw-h-10 tw-py-2 tw-px-4 tw-ring-0'];
    if (this.type() === 'solid') classes.push(' placeholder:tw-text-white tw-bg-azure-400/60 tw-text-white  tw-border-none ');
    if (this.type() === 'stroke') classes.push('placeholder:tw-text-black ')
    return classes.join(' ');
  })

  ngOnInit(): void {
    this.selectedItemModel.set(this.selectItem())
  }

  public selcChng(event: dropDownList): void {
    this.selectedItemModel.set(event);
  }
}
