/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompanyUsersQuery } from '../../models/get-company-users-query';
import { GetCompanyUsersQueryResult } from '../../models/get-company-users-query-result';

export interface GetCompanyUsersPost$Plain$Params {
  
    /**
     * companyId
     */
    body?: GetCompanyUsersQuery
}

export function getCompanyUsersPost$Plain(http: HttpClient, rootUrl: string, params?: GetCompanyUsersPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyUsersQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getCompanyUsersPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCompanyUsersQueryResult>;
    })
  );
}

getCompanyUsersPost$Plain.PATH = '/GetCompanyUsers';
