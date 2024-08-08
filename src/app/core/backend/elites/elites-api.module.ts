/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CategoryService } from './services/category.service';
import { CityService } from './services/city.service';
import { ElitesService } from './services/elites.service';
import { MainCategoryService } from './services/main-category.service';
import { QualificationsService } from './services/qualifications.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CategoryService,
    CityService,
    ElitesService,
    MainCategoryService,
    QualificationsService,
    ApiConfiguration
  ],
})
export class ElitesApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ElitesApiModule> {
    return {
      ngModule: ElitesApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ElitesApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ElitesApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
