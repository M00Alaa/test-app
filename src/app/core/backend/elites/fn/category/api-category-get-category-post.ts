/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCategoryQuery } from '../../models/get-category-query';
import { GetCategoryQueryResult } from '../../models/get-category-query-result';

export interface ApiCategoryGetCategoryPost$Params {
      body?: GetCategoryQuery
}

export function apiCategoryGetCategoryPost(http: HttpClient, rootUrl: string, params?: ApiCategoryGetCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoryQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryGetCategoryPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCategoryQueryResult>;
    })
  );
}

apiCategoryGetCategoryPost.PATH = '/api/Category/GetCategory';
