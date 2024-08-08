/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LogoutCommandResult } from '../../models/logout-command-result';

export interface LogoutGet$Plain$Params {
}

export function logoutGet$Plain(http: HttpClient, rootUrl: string, params?: LogoutGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LogoutCommandResult>> {
  const rb = new RequestBuilder(rootUrl, logoutGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LogoutCommandResult>;
    })
  );
}

logoutGet$Plain.PATH = '/Logout';
