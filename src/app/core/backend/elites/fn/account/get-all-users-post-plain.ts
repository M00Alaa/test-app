/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUsersQuery } from '../../models/get-users-query';
import { GetUsersQueryResult } from '../../models/get-users-query-result';

export interface GetAllUsersPost$Plain$Params {
      body?: GetUsersQuery
}

export function getAllUsersPost$Plain(http: HttpClient, rootUrl: string, params?: GetAllUsersPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getAllUsersPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUsersQueryResult>;
    })
  );
}

getAllUsersPost$Plain.PATH = '/GetAllUsers';
