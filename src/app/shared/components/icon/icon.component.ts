import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() name: string = '';
  @Input() type: string = 'primary';
  @Input() colr?: string = '';

  public iconName: string = '';

  iconList: { [key: string]: string } = {
    eye: '\uE000',
    'eye-off': '\uE001',
  };

  constructor() {}

  ngOnInit(): void {
    this.iconName = `'${this.iconList[this.name]}'`;
  }
}
