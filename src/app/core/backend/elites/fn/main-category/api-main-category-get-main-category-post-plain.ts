/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetMainCategoryQuery } from '../../models/get-main-category-query';
import { GetMainCategoryQueryResult } from '../../models/get-main-category-query-result';

export interface ApiMainCategoryGetMainCategoryPost$Plain$Params {
      body?: GetMainCategoryQuery
}

export function apiMainCategoryGetMainCategoryPost$Plain(http: HttpClient, rootUrl: string, params?: ApiMainCategoryGetMainCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoryQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiMainCategoryGetMainCategoryPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetMainCategoryQueryResult>;
    })
  );
}

apiMainCategoryGetMainCategoryPost$Plain.PATH = '/api/MainCategory/GetMainCategory';
