/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateStackholderCommand } from '../../models/create-stackholder-command';
import { CreateStackholderCommandResult } from '../../models/create-stackholder-command-result';

export interface ApiCommonStackholdersCreateStackholderPost$Plain$Params {
      body?: CreateStackholderCommand
}

export function apiCommonStackholdersCreateStackholderPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersCreateStackholderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateStackholderCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersCreateStackholderPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateStackholderCommandResult>;
    })
  );
}

apiCommonStackholdersCreateStackholderPost$Plain.PATH = '/api/Common/Stackholders/CreateStackholder';
