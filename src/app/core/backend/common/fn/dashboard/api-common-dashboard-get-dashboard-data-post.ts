/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetDashboardQuery } from '../../models/get-dashboard-query';
import { GetDashboardQueryResult } from '../../models/get-dashboard-query-result';

export interface ApiCommonDashboardGetDashboardDataPost$Params {
      body?: GetDashboardQuery
}

export function apiCommonDashboardGetDashboardDataPost(http: HttpClient, rootUrl: string, params?: ApiCommonDashboardGetDashboardDataPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetDashboardQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonDashboardGetDashboardDataPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetDashboardQueryResult>;
    })
  );
}

apiCommonDashboardGetDashboardDataPost.PATH = '/api/Common/Dashboard/GetDashboardData';
