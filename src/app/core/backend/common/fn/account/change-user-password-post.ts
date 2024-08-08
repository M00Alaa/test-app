/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangePasswordCommand } from '../../models/change-password-command';
import { ChangePasswordCommandResult } from '../../models/change-password-command-result';

export interface ChangeUserPasswordPost$Params {
      body?: ChangePasswordCommand
}

export function changeUserPasswordPost(http: HttpClient, rootUrl: string, params?: ChangeUserPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangePasswordCommandResult>> {
  const rb = new RequestBuilder(rootUrl, changeUserPasswordPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ChangePasswordCommandResult>;
    })
  );
}

changeUserPasswordPost.PATH = '/ChangeUserPassword';
