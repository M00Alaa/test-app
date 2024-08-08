/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RemoveUserFromCompanyCommand } from '../../models/remove-user-from-company-command';
import { RemoveUserFromCompanyCommandResult } from '../../models/remove-user-from-company-command-result';

export interface RemoveUserFromCompanyDelete$Plain$Params {
      body?: RemoveUserFromCompanyCommand
}

export function removeUserFromCompanyDelete$Plain(http: HttpClient, rootUrl: string, params?: RemoveUserFromCompanyDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveUserFromCompanyCommandResult>> {
  const rb = new RequestBuilder(rootUrl, removeUserFromCompanyDelete$Plain.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RemoveUserFromCompanyCommandResult>;
    })
  );
}

removeUserFromCompanyDelete$Plain.PATH = '/RemoveUserFromCompany';
