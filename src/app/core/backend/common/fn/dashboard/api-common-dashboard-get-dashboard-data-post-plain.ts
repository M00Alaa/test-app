/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetDashboardQuery } from '../../models/get-dashboard-query';
import { GetDashboardQueryResult } from '../../models/get-dashboard-query-result';

export interface ApiCommonDashboardGetDashboardDataPost$Plain$Params {
      body?: GetDashboardQuery
}

export function apiCommonDashboardGetDashboardDataPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonDashboardGetDashboardDataPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetDashboardQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonDashboardGetDashboardDataPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetDashboardQueryResult>;
    })
  );
}

apiCommonDashboardGetDashboardDataPost$Plain.PATH = '/api/Common/Dashboard/GetDashboardData';
