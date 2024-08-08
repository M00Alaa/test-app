/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetMainCategoriesQuery } from '../../models/get-main-categories-query';
import { GetMainCategoriesQueryResult } from '../../models/get-main-categories-query-result';

export interface ApiMainCategoryGetMainCategoriesPost$Plain$Params {
      body?: GetMainCategoriesQuery
}

export function apiMainCategoryGetMainCategoriesPost$Plain(http: HttpClient, rootUrl: string, params?: ApiMainCategoryGetMainCategoriesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoriesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiMainCategoryGetMainCategoriesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetMainCategoriesQueryResult>;
    })
  );
}

apiMainCategoryGetMainCategoriesPost$Plain.PATH = '/api/MainCategory/GetMainCategories';
