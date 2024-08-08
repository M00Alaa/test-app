/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCategoriesQuery } from '../../models/get-categories-query';
import { GetCategoriesQueryResult } from '../../models/get-categories-query-result';

export interface ApiCategoryGetCategoriesPost$Params {
      body?: GetCategoriesQuery
}

export function apiCategoryGetCategoriesPost(http: HttpClient, rootUrl: string, params?: ApiCategoryGetCategoriesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoriesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryGetCategoriesPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCategoriesQueryResult>;
    })
  );
}

apiCategoryGetCategoriesPost.PATH = '/api/Category/GetCategories';
