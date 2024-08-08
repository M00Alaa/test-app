/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateStackholderCommand } from '../../models/update-stackholder-command';
import { UpdateStackholderCommandResult } from '../../models/update-stackholder-command-result';

export interface ApiCommonStackholdersUpdateStackholderPatch$Plain$Params {
      body?: UpdateStackholderCommand
}

export function apiCommonStackholdersUpdateStackholderPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersUpdateStackholderPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateStackholderCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersUpdateStackholderPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateStackholderCommandResult>;
    })
  );
}

apiCommonStackholdersUpdateStackholderPatch$Plain.PATH = '/api/Common/Stackholders/UpdateStackholder';
