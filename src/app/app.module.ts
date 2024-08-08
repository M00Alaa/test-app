import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';

import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { NZ_DATE_LOCALE, ar_EG, en_US } from 'ng-zorro-antd/i18n';

import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar-EG';
import en from '@angular/common/locales/en';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ar as dateLocale } from 'date-fns/locale';
import player from 'lottie-web';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { LayoutsModule } from './layouts/layouts.module';
import { SpinnerComponent } from './standalone-components/spinner/spinner.component';
enableRtl(true);
// Registering Syncfusion license key
registerLicense(SyncfusionLicense);
registerLocaleData(en);
registerLocaleData(ar);

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
  form: {
    nzNoColon: true,
  },
};

import { enableRtl, registerLicense } from '@syncfusion/ej2-base';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SyncfusionLicense } from './app-const';
import { CommonApiModule } from './core/backend/common/common-api.module';
import { LoaderPageComponent } from './layouts/loader-page/loader-page.component';
import { ElitesApiModule } from './core/backend/elites/elites-api.module';

export function createTranslateLoader(http: HttpClient): unknown {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoaderPageComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgxWebstorageModule.forRoot({
      prefix: 'bmo',
      separator: '-',
    }),
    LayoutsModule,
    SpinnerComponent,
    AppRoutingModule,
    CommonApiModule.forRoot({
      rootUrl: environment.api,
    }),
    ElitesApiModule.forRoot({
      rootUrl: environment.api,
    }),

    CarouselModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbAccordionModule,
    NgbNavModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideNzConfig(ngZorroConfig),

    {
      provide: NZ_I18N,
      useFactory: (localId: string) => {
        if (localId.includes('ar')) {
          return ar_EG;
        } else {
          return en_US;
        }
      },
      deps: [LOCALE_ID],
    },
    {
      provide: NZ_DATE_LOCALE,
      useValue: dateLocale,
    },
    {
      provide: LOCALE_ID,
      useValue: 'ar-EG',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'SR',
    },

    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: 'd MMMM yyyy',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule {}
