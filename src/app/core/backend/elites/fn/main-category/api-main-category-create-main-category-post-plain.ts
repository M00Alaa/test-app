/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateMainCategoryCommand } from '../../models/create-main-category-command';
import { CreateMainCategoryCommandResult } from '../../models/create-main-category-command-result';

export interface ApiMainCategoryCreateMainCategoryPost$Plain$Params {
      body?: CreateMainCategoryCommand
}

export function apiMainCategoryCreateMainCategoryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiMainCategoryCreateMainCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMainCategoryCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiMainCategoryCreateMainCategoryPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateMainCategoryCommandResult>;
    })
  );
}

apiMainCategoryCreateMainCategoryPost$Plain.PATH = '/api/MainCategory/CreateMainCategory';
