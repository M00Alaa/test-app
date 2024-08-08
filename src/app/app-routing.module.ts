import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { Page404Component } from './extrapages/page404/page404.component';
import { LoaderPageComponent } from './layouts/loader-page/loader-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'system-elites/home',
    pathMatch: 'full',
  },

  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },

  {
    path: 'system-elites',
    loadChildren: () =>
      import('./clients/clients.module').then((c) => c.ClientsModule),
    canActivate: [AuthGuard],
  },

  {
    path: '',
    loadChildren: () =>
      import('./extrapages/extrapages.module').then((m) => m.ExtrapagesModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'loader',
    component: LoaderPageComponent,
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'ignore',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
