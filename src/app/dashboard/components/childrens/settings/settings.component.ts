import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AvatarComponent } from "../../../../shared/components/avatar/avatar.component";
import { IconComponent } from "../../../../shared/components/icon/icon.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LottieSerService } from '../../../../shared/services/lottie/lottie-ser.service';
import { InputComponent } from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, AvatarComponent, IconComponent, ButtonComponent,LottieComponent,InputComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  public readonly lottieService = inject(LottieSerService);

  options: AnimationOptions[] = [
    {
      path: '/json/edit.json',
      autoplay: false,
      loop: false,
    },
    {
      path: '/json/check.json',
      autoplay: false,
      loop: false,
    },
  ];

  isEdit = signal<boolean>(false);
}
