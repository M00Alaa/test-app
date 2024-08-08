/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUserInfoQueryResult } from '../../models/get-user-info-query-result';

export interface GetUserInfoGet$Params {
  Id: string;
}

export function getUserInfoGet(http: HttpClient, rootUrl: string, params: GetUserInfoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserInfoQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getUserInfoGet.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUserInfoQueryResult>;
    })
  );
}

getUserInfoGet.PATH = '/GetUserInfo';
