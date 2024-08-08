/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssignUserToCompanyCommand } from '../../models/assign-user-to-company-command';
import { AssignUserToCompanyCommandResult } from '../../models/assign-user-to-company-command-result';

export interface AssignUserToCompanyPatch$Plain$Params {
      body?: AssignUserToCompanyCommand
}

export function assignUserToCompanyPatch$Plain(http: HttpClient, rootUrl: string, params?: AssignUserToCompanyPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AssignUserToCompanyCommandResult>> {
  const rb = new RequestBuilder(rootUrl, assignUserToCompanyPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AssignUserToCompanyCommandResult>;
    })
  );
}

assignUserToCompanyPatch$Plain.PATH = '/AssignUserToCompany';
