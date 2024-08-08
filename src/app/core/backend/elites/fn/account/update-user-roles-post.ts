/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserRolesCommand } from '../../models/update-user-roles-command';
import { UpdateUserRolesCommandResult } from '../../models/update-user-roles-command-result';

export interface UpdateUserRolesPost$Params {
      body?: UpdateUserRolesCommand
}

export function updateUserRolesPost(http: HttpClient, rootUrl: string, params?: UpdateUserRolesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserRolesCommandResult>> {
  const rb = new RequestBuilder(rootUrl, updateUserRolesPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateUserRolesCommandResult>;
    })
  );
}

updateUserRolesPost.PATH = '/UpdateUserRoles';
