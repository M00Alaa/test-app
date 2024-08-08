/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserCommand } from '../../models/update-user-command';
import { UpdateUserCommandResult } from '../../models/update-user-command-result';

export interface UpdateUserPatch$Params {
      body?: UpdateUserCommand
}

export function updateUserPatch(http: HttpClient, rootUrl: string, params?: UpdateUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserCommandResult>> {
  const rb = new RequestBuilder(rootUrl, updateUserPatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateUserCommandResult>;
    })
  );
}

updateUserPatch.PATH = '/UpdateUser';
