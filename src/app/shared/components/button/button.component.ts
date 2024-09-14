import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent {
  disabled: InputSignal<boolean> = input<boolean>(false);
  type: InputSignal<string> = input<string>('normal')

  public readonly mode: { [key: string]: string } = {
    "normal": 'tw-w-full tw-justify-center tw-rounded-xl tw-h-10',
    "disabled": 'tw-pointer-events-none tw-cursor-not-allowed tw-w-full tw-justify-center tw-rounded-xl tw-h-10',
  };

  constructor() { }

  ngOnInit(): void { }
}
