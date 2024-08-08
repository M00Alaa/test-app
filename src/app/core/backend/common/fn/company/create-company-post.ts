/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateCompanyCommand } from '../../models/create-company-command';
import { CreateCompanyCommandResult } from '../../models/create-company-command-result';

export interface CreateCompanyPost$Params {
      body?: CreateCompanyCommand
}

export function createCompanyPost(http: HttpClient, rootUrl: string, params?: CreateCompanyPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCompanyCommandResult>> {
  const rb = new RequestBuilder(rootUrl, createCompanyPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateCompanyCommandResult>;
    })
  );
}

createCompanyPost.PATH = '/CreateCompany';
