import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { RouterLink } from '@angular/router';
import { DatepickerComponent } from '../../../shared/components/datepicker/datepicker.component';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,CheckboxModule,ButtonComponent,InputComponent,FormsModule,ReactiveFormsModule,RouterLink,NgOptimizedImage,DatepickerComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  frm!: FormGroup;
  checked :boolean = false;
  form_submit = signal<boolean>(false);

  constructor() {}

  ngOnInit() {
    this.frm = new FormGroup({
      cName: new FormControl('',Validators.required),
      dDob: new FormControl('',Validators.required),
      cEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
      ]),
      cPass: new FormControl('', Validators.required),
      bCheck: new FormControl(this.checked,Validators.required)
    });
  }

  submit() {
    this.form_submit.set(true);
    const formData = this.frm.value;
  }
}
