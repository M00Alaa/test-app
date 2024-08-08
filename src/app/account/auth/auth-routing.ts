import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { SystemChooserComponent } from './system-chooser/system-chooser.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'choose',
    component: SystemChooserComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'select-role',
  //   component: RegTypeSelectorComponent,
  // },
  // {
  //   path: 'signup',
  //   redirectTo: 'select-role',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'signup/:type',
  //   component: SignupComponent,
  // },
  // {
  //   path: 'success-register',
  //   component: SuccessRegisterComponent,
  // },

  {
    path: 'reset-password',
    component: PasswordresetComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
