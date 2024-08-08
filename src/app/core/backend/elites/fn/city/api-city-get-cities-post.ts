/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCitiesQuery } from '../../models/get-cities-query';
import { GetCitiesQueryResult } from '../../models/get-cities-query-result';

export interface ApiCityGetCitiesPost$Params {
      body?: GetCitiesQuery
}

export function apiCityGetCitiesPost(http: HttpClient, rootUrl: string, params?: ApiCityGetCitiesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCitiesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityGetCitiesPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCitiesQueryResult>;
    })
  );
}

apiCityGetCitiesPost.PATH = '/api/City/GetCities';
