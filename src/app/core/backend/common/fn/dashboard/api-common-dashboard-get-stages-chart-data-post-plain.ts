/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStagesChartQuery } from '../../models/get-stages-chart-query';
import { GetStagesChartQueryResult } from '../../models/get-stages-chart-query-result';

export interface ApiCommonDashboardGetStagesChartDataPost$Plain$Params {
      body?: GetStagesChartQuery
}

export function apiCommonDashboardGetStagesChartDataPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonDashboardGetStagesChartDataPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStagesChartQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonDashboardGetStagesChartDataPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStagesChartQueryResult>;
    })
  );
}

apiCommonDashboardGetStagesChartDataPost$Plain.PATH = '/api/Common/Dashboard/GetStagesChartData';
