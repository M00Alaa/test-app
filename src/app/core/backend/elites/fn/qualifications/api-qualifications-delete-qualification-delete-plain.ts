/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteQualificationCommand } from '../../models/delete-qualification-command';
import { DeleteQualificationCommandResult } from '../../models/delete-qualification-command-result';

export interface ApiQualificationsDeleteQualificationDelete$Plain$Params {
      body?: DeleteQualificationCommand
}

export function apiQualificationsDeleteQualificationDelete$Plain(http: HttpClient, rootUrl: string, params?: ApiQualificationsDeleteQualificationDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteQualificationCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiQualificationsDeleteQualificationDelete$Plain.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteQualificationCommandResult>;
    })
  );
}

apiQualificationsDeleteQualificationDelete$Plain.PATH = '/api/Qualifications/DeleteQualification';
