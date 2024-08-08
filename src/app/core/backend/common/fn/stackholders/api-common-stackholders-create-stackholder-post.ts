/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateStackholderCommand } from '../../models/create-stackholder-command';
import { CreateStackholderCommandResult } from '../../models/create-stackholder-command-result';

export interface ApiCommonStackholdersCreateStackholderPost$Params {
      body?: CreateStackholderCommand
}

export function apiCommonStackholdersCreateStackholderPost(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersCreateStackholderPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateStackholderCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersCreateStackholderPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateStackholderCommandResult>;
    })
  );
}

apiCommonStackholdersCreateStackholderPost.PATH = '/api/Common/Stackholders/CreateStackholder';
