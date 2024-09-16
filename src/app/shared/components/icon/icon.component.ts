import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
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
  name:InputSignal<string> = input.required<string>();
  type:InputSignal<string> = input<string>('primary');
  addCls:InputSignal<string> = input<string>('');

  public readonly iconName = computed(() => {
    return `'${this.iconList[this.name()]}'`
  });

  iconList: { [key: string]: string } = {
    'eye': '\uE000',
    'eye-off': '\uE001',
    'calendar': '\uE002',
    'logout': '\uE003',
  };

}
