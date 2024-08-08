/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetQualificationsQuery } from '../../models/get-qualifications-query';
import { GetQualificationsQueryResult } from '../../models/get-qualifications-query-result';

export interface ApiQualificationsGetQualificationsPost$Params {
      body?: GetQualificationsQuery
}

export function apiQualificationsGetQualificationsPost(http: HttpClient, rootUrl: string, params?: ApiQualificationsGetQualificationsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationsQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsGetQualificationsPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetQualificationsQueryResult>;
    })
  );
}

apiQualificationsGetQualificationsPost.PATH = '/api/Qualifications/GetQualifications';
