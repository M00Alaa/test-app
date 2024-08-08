/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteCompanyCommand } from '../../models/delete-company-command';
import { DeleteCompanyCommandResult } from '../../models/delete-company-command-result';

export interface DeleteCompanyDelete$Plain$Params {
      body?: DeleteCompanyCommand
}

export function deleteCompanyDelete$Plain(http: HttpClient, rootUrl: string, params?: DeleteCompanyDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCompanyCommandResult>> {
  const rb = new RequestBuilder(rootUrl, deleteCompanyDelete$Plain.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteCompanyCommandResult>;
    })
  );
}

deleteCompanyDelete$Plain.PATH = '/DeleteCompany';