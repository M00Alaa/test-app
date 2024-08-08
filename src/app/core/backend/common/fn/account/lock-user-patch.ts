/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserLockCommand } from '../../models/user-lock-command';
import { UserLockCommandResult } from '../../models/user-lock-command-result';

export interface LockUserPatch$Params {
  
    /**
     * User Id and [block end date]
     */
    body?: UserLockCommand
}

export function lockUserPatch(http: HttpClient, rootUrl: string, params?: LockUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UserLockCommandResult>> {
  const rb = new RequestBuilder(rootUrl, lockUserPatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserLockCommandResult>;
    })
  );
}

lockUserPatch.PATH = '/LockUser';
