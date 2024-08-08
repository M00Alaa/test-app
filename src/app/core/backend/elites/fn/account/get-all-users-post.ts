/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUsersQuery } from '../../models/get-users-query';
import { GetUsersQueryResult } from '../../models/get-users-query-result';

export interface GetAllUsersPost$Params {
      body?: GetUsersQuery
}

export function getAllUsersPost(http: HttpClient, rootUrl: string, params?: GetAllUsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getAllUsersPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUsersQueryResult>;
    })
  );
}

getAllUsersPost.PATH = '/GetAllUsers';
