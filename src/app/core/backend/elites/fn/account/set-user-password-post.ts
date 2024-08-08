/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SetPasswordCommand } from '../../models/set-password-command';
import { SetPasswordCommandResult } from '../../models/set-password-command-result';

export interface SetUserPasswordPost$Params {
      body?: SetPasswordCommand
}

export function setUserPasswordPost(http: HttpClient, rootUrl: string, params?: SetUserPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<SetPasswordCommandResult>> {
  const rb = new RequestBuilder(rootUrl, setUserPasswordPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SetPasswordCommandResult>;
    })
  );
}

setUserPasswordPost.PATH = '/SetUserPassword';
