import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalComponent } from './layout/vertical/vertical.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ROLES } from '../app-const';

const routes: Routes = [
  {
    path: '',
    component: VerticalComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/elites/elites.module').then((m) => m.ElitesModule),
        canActivate: [AuthGuard],
        data: {
          roles: [ROLES.Admin, ROLES.Employee],
        },
      },
      {
        path: 'cities',
        loadComponent: () =>
          import('./pages/elites-cities/elites-cities.component').then(
            (m) => m.ElitesCitiesComponent,
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [ROLES.Admin],
        },
      },
      {
        path: 'qualifications',
        loadComponent: () =>
          import(
            './pages/elites-qualifications/elites-qualifications.component'
          ).then((m) => m.ElitesQualificationsComponent),
        canActivate: [AuthGuard],
        data: {
          roles: [ROLES.Admin],
        },
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/elites-categories/elites-categories.component').then(
            (m) => m.ElitesCategoriesComponent,
          ),
        canActivate: [AuthGuard],
        data: {
          roles: [ROLES.Admin],
        },
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./pages/change-password/change-password.component').then(
            (m) => m.ChangePasswordComponent,
          )
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuard],
        data: {
          roles: [ROLES.Admin],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
