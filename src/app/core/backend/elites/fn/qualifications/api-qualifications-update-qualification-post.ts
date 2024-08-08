/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateQualificationCommand } from '../../models/update-qualification-command';
import { UpdateQualificationCommandResult } from '../../models/update-qualification-command-result';

export interface ApiQualificationsUpdateQualificationPost$Params {
      body?: UpdateQualificationCommand
}

export function apiQualificationsUpdateQualificationPost(http: HttpClient, rootUrl: string, params?: ApiQualificationsUpdateQualificationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateQualificationCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsUpdateQualificationPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateQualificationCommandResult>;
    })
  );
}

apiQualificationsUpdateQualificationPost.PATH = '/api/Qualifications/UpdateQualification';
