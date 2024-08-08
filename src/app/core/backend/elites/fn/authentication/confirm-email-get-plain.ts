/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConfirmEmailCommandResult } from '../../models/confirm-email-command-result';

export interface ConfirmEmailGet$Plain$Params {
  Email: string;
  Code: string;
}

export function confirmEmailGet$Plain(http: HttpClient, rootUrl: string, params: ConfirmEmailGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmEmailCommandResult>> {
  const rb = new RequestBuilder(rootUrl, confirmEmailGet$Plain.PATH, 'get');
  if (params) {
    rb.query('Email', params.Email, {});
    rb.query('Code', params.Code, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ConfirmEmailCommandResult>;
    })
  );
}

confirmEmailGet$Plain.PATH = '/ConfirmEmail';
