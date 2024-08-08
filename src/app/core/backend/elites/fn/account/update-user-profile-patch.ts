/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserProfileCommand } from '../../models/update-user-profile-command';
import { UpdateUserProfileCommandResult } from '../../models/update-user-profile-command-result';

export interface UpdateUserProfilePatch$Params {
      body?: UpdateUserProfileCommand
}

export function updateUserProfilePatch(http: HttpClient, rootUrl: string, params?: UpdateUserProfilePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserProfileCommandResult>> {
  const rb = new RequestBuilder(rootUrl, updateUserProfilePatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateUserProfileCommandResult>;
    })
  );
}

updateUserProfilePatch.PATH = '/UpdateUserProfile';
