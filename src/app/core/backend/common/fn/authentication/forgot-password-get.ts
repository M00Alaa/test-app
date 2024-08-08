/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ForgotPasswordCommandResult } from '../../models/forgot-password-command-result';

export interface ForgotPasswordGet$Params {
  Email: string;
}

export function forgotPasswordGet(http: HttpClient, rootUrl: string, params: ForgotPasswordGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordCommandResult>> {
  const rb = new RequestBuilder(rootUrl, forgotPasswordGet.PATH, 'get');
  if (params) {
    rb.query('Email', params.Email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ForgotPasswordCommandResult>;
    })
  );
}

forgotPasswordGet.PATH = '/ForgotPassword';
