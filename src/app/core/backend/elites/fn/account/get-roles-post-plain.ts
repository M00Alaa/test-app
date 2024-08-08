/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetRolesQuery } from '../../models/get-roles-query';
import { GetRolesQueryResult } from '../../models/get-roles-query-result';

export interface GetRolesPost$Plain$Params {
      body?: GetRolesQuery
}

export function getRolesPost$Plain(http: HttpClient, rootUrl: string, params?: GetRolesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetRolesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getRolesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetRolesQueryResult>;
    })
  );
}

getRolesPost$Plain.PATH = '/GetRoles';
