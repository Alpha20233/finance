import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly route = inject(Router);

  logout(): void {
    this.route.navigate(['/auth/signin']);
  }
}
