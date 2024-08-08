/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCitiesQuery } from '../../models/get-cities-query';
import { GetCitiesQueryResult } from '../../models/get-cities-query-result';

export interface ApiCityGetCitiesPost$Plain$Params {
      body?: GetCitiesQuery
}

export function apiCityGetCitiesPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCityGetCitiesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCitiesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityGetCitiesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCitiesQueryResult>;
    })
  );
}

apiCityGetCitiesPost$Plain.PATH = '/api/City/GetCities';
