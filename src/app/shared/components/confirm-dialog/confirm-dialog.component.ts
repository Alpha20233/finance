import { CommonModule } from '@angular/common';
import { Component, inject, input, Input, output, signal } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { ToastModule } from 'primeng/toast';
import { CommService } from '../../services/common/comm.service';

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, IconComponent, ButtonComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ConfirmDialogComponent {
  message = input.required<string>();
  header = input.required<string>();
  icon = input.required<string>();
  onConfirm = output<any>();
  onReject = output<any>();

  isShow = signal<boolean>(true);

  private readonly comm = inject(CommService);
  constructor(private readonly confirmationService: ConfirmationService) {}

  showDialog() {
    this.confirmationService.confirm({
      message: this.message(),
      header: this.header(),
      icon: this.icon(),
      accept: () => {
        this.delete();
      },
      reject: () => {
        this.cancel();
      },
    });
  }

  cancel() {
    this.confirmationService.close();
    this.onReject.emit('cancel');
  }

  delete() {
    this.confirmationService.close();
    this.onConfirm.emit('success');
    this.comm.openToastMsg('Transactions deleted successfully', 'success');
  }
}
