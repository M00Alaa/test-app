/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetRolesQueryResult } from '../../models/get-roles-query-result';

export interface GetRolesGet$Plain$Params {
  UserId?: string;
}

export function getRolesGet$Plain(http: HttpClient, rootUrl: string, params?: GetRolesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetRolesQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getRolesGet$Plain.PATH, 'get');
  if (params) {
    rb.query('UserId', params.UserId, {});
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

getRolesGet$Plain.PATH = '/GetRoles';
