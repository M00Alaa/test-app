/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUserQueryResult } from '../../models/get-user-query-result';

export interface GetCurrentUserGet$Params {
}

export function getCurrentUserGet(http: HttpClient, rootUrl: string, params?: GetCurrentUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getCurrentUserGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUserQueryResult>;
    })
  );
}

getCurrentUserGet.PATH = '/GetCurrentUser';
