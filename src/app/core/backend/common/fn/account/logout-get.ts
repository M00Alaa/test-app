/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { LogoutCommandResult } from '../../models/logout-command-result';

export interface LogoutGet$Params {
}

export function logoutGet(http: HttpClient, rootUrl: string, params?: LogoutGet$Params, context?: HttpContext): Observable<StrictHttpResponse<LogoutCommandResult>> {
  const rb = new RequestBuilder(rootUrl, logoutGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<LogoutCommandResult>;
    })
  );
}

logoutGet.PATH = '/Logout';
