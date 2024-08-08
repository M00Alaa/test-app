/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetElitesQuery } from '../../models/get-elites-query';
import { GetElitesQueryResult } from '../../models/get-elites-query-result';

export interface ApiElitesGetElitesPost$Plain$Params {
      body?: GetElitesQuery
}

export function apiElitesGetElitesPost$Plain(http: HttpClient, rootUrl: string, params?: ApiElitesGetElitesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetElitesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiElitesGetElitesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetElitesQueryResult>;
    })
  );
}

apiElitesGetElitesPost$Plain.PATH = '/api/Elites/GetElites';