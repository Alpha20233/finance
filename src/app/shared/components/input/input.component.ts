import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { icon, validCond } from '../../../core/models/auth.interface';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() inpLabel: string = '';
  @Input() value: string = '';
  @Input() isValid: validCond = {
    cond1: false,
    cond2: false,
    form_submit: false,
  };
  @Input() validText: string = '';
  @Input() validText2: string = '';
  @Input() icon: icon = { name: '', type: 'primary' };
  @Input() maxLength: number = 50;

  eyeToggle = signal<boolean>(false);
  inptValue: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.inptValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(value: string): void {
    this.inptValue = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
