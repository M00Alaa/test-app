/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteUserCommand } from '../../models/delete-user-command';
import { DeleteUserCommandResult } from '../../models/delete-user-command-result';

export interface DeleteUserDelete$Plain$Params {
      body?: DeleteUserCommand
}

export function deleteUserDelete$Plain(http: HttpClient, rootUrl: string, params?: DeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteUserCommandResult>> {
  const rb = new RequestBuilder(rootUrl, deleteUserDelete$Plain.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteUserCommandResult>;
    })
  );
}

deleteUserDelete$Plain.PATH = '/DeleteUser';
