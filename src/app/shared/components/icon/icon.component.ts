import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  Input,
  InputSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name: InputSignal<string> = input.required<string>();
  type: InputSignal<string> = input<string>('primary');
  addCls: InputSignal<string> = input<string>('');

  public readonly iconName = signal<string>('');

  iconList: { [key: string]: string } = {
    "eye": '\uE000',
    "eye-off": '\uE001',
    "calendar": '\uE002',
  };

  constructor() {}

  ngOnInit(): void {
    this.iconName.set(`'${this.iconList[this.name()]}'`);
  }
}
