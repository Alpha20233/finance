import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  SimpleChanges,
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
  @Input() disabled = signal<boolean>(false);
  @Input() type: keyof typeof this.mode = 'normal';

  public readonly mode = {
    normal: 'tw-w-full tw-justify-center tw-rounded-xl tw-h-10',
    disabled:
      'tw-pointer-events-none tw-w-full tw-justify-center tw-rounded-xl tw-h-10',
  };

  public getClassName = signal<string>('');

  constructor() {}

  ngOnInit(): void {
    this.getClassName.set(this.mode[this.type] ?? this.mode['normal']);
  }
}
