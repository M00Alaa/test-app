/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCityQuery } from '../../models/get-city-query';
import { GetCityQueryResult } from '../../models/get-city-query-result';

export interface ApiCityGetCityPost$Plain$Params {
      body?: GetCityQuery
}

export function apiCityGetCityPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCityGetCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCityQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityGetCityPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCityQueryResult>;
    })
  );
}

apiCityGetCityPost$Plain.PATH = '/api/City/GetCity';
