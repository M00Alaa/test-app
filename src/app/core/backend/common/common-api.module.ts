/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountService } from './services/account.service';
import { AttachmentService } from './services/attachment.service';
import { AuthenticationService } from './services/authentication.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountService,
    AttachmentService,
    AuthenticationService,
    ApiConfiguration
  ],
})
export class CommonApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<CommonApiModule> {
    return {
      ngModule: CommonApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: CommonApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('CommonApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
