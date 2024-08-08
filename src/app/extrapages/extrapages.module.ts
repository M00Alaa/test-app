import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgOtpInputModule } from 'ng-otp-input';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { StylesChangerService } from '../core/services/style.service';
import { Page403Component } from './page403/page403.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [ Page404Component, Page403Component ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslateModule,
    ExtrapagesRoutingModule,
    NgOtpInputModule
  ]
})
export class ExtrapagesModule {
  constructor(styleService: StylesChangerService) {
    styleService.loadStyle('pmo');
  }
 }
