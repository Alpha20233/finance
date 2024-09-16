import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/modules/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule,
      ),
  },
];
