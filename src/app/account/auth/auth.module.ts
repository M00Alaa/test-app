import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LottieModule } from 'ngx-lottie';
import { RoleDirective } from 'src/app/shared/directives/app-permissions.directive';
import { NzFormFullModule } from 'src/app/shared/modules/nz-form-full/nz-form-full.module';
import { ButttonComponent } from 'src/app/standalone-components/buttton/buttton.component';
import { AcctypeButtonComponent } from './acctype-button/acctype-button.component';
import { AuthRoutingModule } from './auth-routing';
import { AuthWrapperComponent } from './auth-wrapper/auth-wrapper.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { RegTypeSelectorComponent } from './reg-type-selector/reg-type-selector.component';
import { AcctypePipe } from './signup/acctype.pipe';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { SystemChooserComponent } from './system-chooser/system-chooser.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordresetComponent,
    VerifyEmailComponent,
    SuccessRegisterComponent,
    RegTypeSelectorComponent,
    AcctypeButtonComponent,
    AcctypePipe,
    SystemChooserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    FormsModule,
    NgbAlertModule,
    LottieModule,
    AuthWrapperComponent,
    NzButtonModule,
    RoleDirective,
    NzRadioModule,
    NzSelectModule,
    NgbPopoverModule,
    AuthRoutingModule,
    NzFormFullModule,
    NgbDropdownModule,
    CarouselModule,
    ButttonComponent,
  ],
})
export class AuthModule { }
