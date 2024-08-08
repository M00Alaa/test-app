/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetQualificationQuery } from '../../models/get-qualification-query';
import { GetQualificationQueryResult } from '../../models/get-qualification-query-result';

export interface ApiQualificationsGetQualificationPost$Params {
      body?: GetQualificationQuery
}

export function apiQualificationsGetQualificationPost(http: HttpClient, rootUrl: string, params?: ApiQualificationsGetQualificationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsGetQualificationPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetQualificationQueryResult>;
    })
  );
}

apiQualificationsGetQualificationPost.PATH = '/api/Qualifications/GetQualification';
