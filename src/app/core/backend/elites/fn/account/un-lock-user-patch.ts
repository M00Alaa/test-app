/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserUnlockCommand } from '../../models/user-unlock-command';
import { UserUnlockCommandResult } from '../../models/user-unlock-command-result';

export interface UnLockUserPatch$Params {
  
    /**
     * User Id
     */
    body?: UserUnlockCommand
}

export function unLockUserPatch(http: HttpClient, rootUrl: string, params?: UnLockUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UserUnlockCommandResult>> {
  const rb = new RequestBuilder(rootUrl, unLockUserPatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserUnlockCommandResult>;
    })
  );
}

unLockUserPatch.PATH = '/UnLockUser';
