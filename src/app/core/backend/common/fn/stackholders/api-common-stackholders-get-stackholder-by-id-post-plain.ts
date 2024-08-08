/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStackholderQuery } from '../../models/get-stackholder-query';
import { GetStackholderQueryResult } from '../../models/get-stackholder-query-result';

export interface ApiCommonStackholdersGetStackholderByIdPost$Plain$Params {
      body?: GetStackholderQuery
}

export function apiCommonStackholdersGetStackholderByIdPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetStackholderByIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStackholderQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetStackholderByIdPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStackholderQueryResult>;
    })
  );
}

apiCommonStackholdersGetStackholderByIdPost$Plain.PATH = '/api/Common/Stackholders/GetStackholderByID';
