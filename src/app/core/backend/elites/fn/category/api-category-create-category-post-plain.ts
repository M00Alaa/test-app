/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateCategoryCommand } from '../../models/create-category-command';
import { CreateCategoryCommandResult } from '../../models/create-category-command-result';

export interface ApiCategoryCreateCategoryPost$Plain$Params {
      body?: CreateCategoryCommand
}

export function apiCategoryCreateCategoryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCategoryCreateCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCategoryCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryCreateCategoryPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateCategoryCommandResult>;
    })
  );
}

apiCategoryCreateCategoryPost$Plain.PATH = '/api/Category/CreateCategory';
