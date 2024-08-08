/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCityQuery } from '../../models/get-city-query';
import { GetCityQueryResult } from '../../models/get-city-query-result';

export interface ApiCityGetCityPost$Params {
      body?: GetCityQuery
}

export function apiCityGetCityPost(http: HttpClient, rootUrl: string, params?: ApiCityGetCityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCityQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityGetCityPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCityQueryResult>;
    })
  );
}

apiCityGetCityPost.PATH = '/api/City/GetCity';
