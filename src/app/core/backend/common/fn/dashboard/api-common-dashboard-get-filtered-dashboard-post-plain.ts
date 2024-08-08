/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetFilteredDashboardQuery } from '../../models/get-filtered-dashboard-query';
import { GetFilteredDashboardQueryResult } from '../../models/get-filtered-dashboard-query-result';

export interface ApiCommonDashboardGetFilteredDashboardPost$Plain$Params {
      body?: GetFilteredDashboardQuery
}

export function apiCommonDashboardGetFilteredDashboardPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonDashboardGetFilteredDashboardPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetFilteredDashboardQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonDashboardGetFilteredDashboardPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetFilteredDashboardQueryResult>;
    })
  );
}

apiCommonDashboardGetFilteredDashboardPost$Plain.PATH = '/api/Common/Dashboard/GetFilteredDashboard';
