/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStagesChartQuery } from '../../models/get-stages-chart-query';
import { GetStagesChartQueryResult } from '../../models/get-stages-chart-query-result';

export interface ApiCommonDashboardGetStagesChartDataPost$Params {
      body?: GetStagesChartQuery
}

export function apiCommonDashboardGetStagesChartDataPost(http: HttpClient, rootUrl: string, params?: ApiCommonDashboardGetStagesChartDataPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStagesChartQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonDashboardGetStagesChartDataPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStagesChartQueryResult>;
    })
  );
}

apiCommonDashboardGetStagesChartDataPost.PATH = '/api/Common/Dashboard/GetStagesChartData';
