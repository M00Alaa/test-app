/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetQualificationQuery } from '../../models/get-qualification-query';
import { GetQualificationQueryResult } from '../../models/get-qualification-query-result';

export interface ApiQualificationsGetQualificationPost$Plain$Params {
      body?: GetQualificationQuery
}

export function apiQualificationsGetQualificationPost$Plain(http: HttpClient, rootUrl: string, params?: ApiQualificationsGetQualificationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsGetQualificationPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetQualificationQueryResult>;
    })
  );
}

apiQualificationsGetQualificationPost$Plain.PATH = '/api/Qualifications/GetQualification';
