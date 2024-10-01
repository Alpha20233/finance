import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from "../../../../shared/components/avatar/avatar.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, AvatarComponent, IconComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
