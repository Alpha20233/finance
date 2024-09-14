import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { signin } from '../../models/auth.interface';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { CommService } from '../../../shared/services/common/comm.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    InputComponent,
    ReactiveFormsModule,
    CheckboxModule,
    FormsModule,
    ButtonComponent,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  frm!: FormGroup;
  checked = model<boolean>(true);
  form_submit = signal<boolean>(false);

  constructor(public readonly comm: CommService) {}

  ngOnInit(): void {
    this.frm = new FormGroup({
      cEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
      ]),
      cPass: new FormControl('', Validators.required),
    });
  }

  submit() {
    this.form_submit.set(true);
    if (this.frm.invalid) return;
    const formData: signin = this.frm.value;
    console.warn(formData);
  }
}
