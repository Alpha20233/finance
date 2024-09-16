import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  input,
  InputSignal,
  signal,
} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
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
  active: InputSignal<boolean> = input<boolean>(false);
  type = input<'solid' | 'light'>('solid');

  private readonly baseClasses = 'tw-w-full tw-justify-center tw-text-sm tw-rounded-lg tw-h-10';
  private readonly lightClasses = 'tw-bg-transparent tw-text-white xl:tw-cursor-pointer tw-transition-all tw-ease-in tw-duration-200 hover:tw-bg-gray-50/20 tw-py-2 tw-px-4 tw-rounded-md tw-border-none tw-ring-0';
  private readonly activeClasses = '!tw-bg-gray-50/10 tw-ring-0 tw-py-2 tw-px-4 tw-border-none';

  public readonly buttonClasses = computed(() => {
    const classes = [this.baseClasses];
    if (this.type() === 'light') classes.push(this.lightClasses);
    if (this.active()) classes.push(this.activeClasses);
    if (this.disabled()) classes.push('tw-pointer-events-none');
    return classes.join(' ');
  });

  constructor(private readonly primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = this.type() !== 'light';
  }

}
