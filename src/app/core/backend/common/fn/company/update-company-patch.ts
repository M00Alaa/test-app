/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateCompanyCommand } from '../../models/update-company-command';
import { UpdateCompanyCommandResult } from '../../models/update-company-command-result';

export interface UpdateCompanyPatch$Params {
      body?: UpdateCompanyCommand
}

export function updateCompanyPatch(http: HttpClient, rootUrl: string, params?: UpdateCompanyPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCompanyCommandResult>> {
  const rb = new RequestBuilder(rootUrl, updateCompanyPatch.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateCompanyCommandResult>;
    })
  );
}

updateCompanyPatch.PATH = '/UpdateCompany';
