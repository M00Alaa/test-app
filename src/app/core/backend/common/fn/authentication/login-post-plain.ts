/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LoginCommand } from '../../models/login-command';
import { LoginCommandResult } from '../../models/login-command-result';

export interface LoginPost$Plain$Params {
      body?: LoginCommand
}

export function loginPost$Plain(http: HttpClient, rootUrl: string, params?: LoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginCommandResult>> {
  const rb = new RequestBuilder(rootUrl, loginPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LoginCommandResult>;
    })
  );
}

loginPost$Plain.PATH = '/Login';
