/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SendConfirmEmailCommandResult } from '../../models/send-confirm-email-command-result';

export interface ResendConfirmEmailGet$Params {
  Email: string;
}

export function resendConfirmEmailGet(http: HttpClient, rootUrl: string, params: ResendConfirmEmailGet$Params, context?: HttpContext): Observable<StrictHttpResponse<SendConfirmEmailCommandResult>> {
  const rb = new RequestBuilder(rootUrl, resendConfirmEmailGet.PATH, 'get');
  if (params) {
    rb.query('Email', params.Email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SendConfirmEmailCommandResult>;
    })
  );
}

resendConfirmEmailGet.PATH = '/ResendConfirmEmail';
