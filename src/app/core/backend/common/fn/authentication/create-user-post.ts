/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegisterCommand } from '../../models/register-command';
import { RegisterCommandResult } from '../../models/register-command-result';

export interface CreateUserPost$Params {
      body?: RegisterCommand
}

export function createUserPost(http: HttpClient, rootUrl: string, params?: CreateUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterCommandResult>> {
  const rb = new RequestBuilder(rootUrl, createUserPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegisterCommandResult>;
    })
  );
}

createUserPost.PATH = '/CreateUser';
