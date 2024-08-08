/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteStackholderCommand } from '../../models/delete-stackholder-command';
import { DeleteStackholderCommandResult } from '../../models/delete-stackholder-command-result';

export interface ApiCommonStackholdersDeleteStackholderDelete$Params {
      body?: DeleteStackholderCommand
}

export function apiCommonStackholdersDeleteStackholderDelete(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersDeleteStackholderDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteStackholderCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersDeleteStackholderDelete.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteStackholderCommandResult>;
    })
  );
}

apiCommonStackholdersDeleteStackholderDelete.PATH = '/api/Common/Stackholders/DeleteStackholder';
