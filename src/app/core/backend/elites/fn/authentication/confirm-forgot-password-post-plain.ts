/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ForgotPasswordConfirmationCommand } from '../../models/forgot-password-confirmation-command';
import { ForgotPasswordConfirmationCommandResult } from '../../models/forgot-password-confirmation-command-result';

export interface ConfirmForgotPasswordPost$Plain$Params {
      body?: ForgotPasswordConfirmationCommand
}

export function confirmForgotPasswordPost$Plain(http: HttpClient, rootUrl: string, params?: ConfirmForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordConfirmationCommandResult>> {
  const rb = new RequestBuilder(rootUrl, confirmForgotPasswordPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ForgotPasswordConfirmationCommandResult>;
    })
  );
}

confirmForgotPasswordPost$Plain.PATH = '/ConfirmForgotPassword';
