import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { RouterLink } from '@angular/router';

import { signup } from '../../models/auth.interface';
import { DatepickerComponent } from '../../../shared/components/datepicker/datepicker.component';
import { CommService } from '../../../shared/services/common/comm.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgOptimizedImage,
    DatepickerComponent,
    AsyncPipe,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  public frm!: FormGroup;
  public checked: boolean = false;
  public form_submit = signal<boolean>(false);

  constructor(public readonly comm: CommService) {}

  ngOnInit():void {
    this.frm = new FormGroup({
      cName: new FormControl('', Validators.required),
      dDob: new FormControl('', Validators.required),
      cEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
      ]),
      cPass: new FormControl('', Validators.required),
      bCheck: new FormControl(this.checked, Validators.required),
    });
  }

  submit() {
    this.form_submit.set(true);
    if(this.frm.invalid) return;
    const formData: signup = this.frm.value;
  }
}
