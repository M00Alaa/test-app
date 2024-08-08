/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStackholdersByUserIdQueryResult } from '../../models/get-stackholders-by-user-id-query-result';

export interface ApiCommonStackholdersGetStackholdersByUserIdPost$Plain$Params {
      body?: {
'UserId'?: string;
'IsTaskManager'?: boolean;
'IsNurseryManager'?: boolean;
'IsPMO'?: boolean;
}
}

export function apiCommonStackholdersGetStackholdersByUserIdPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetStackholdersByUserIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStackholdersByUserIdQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetStackholdersByUserIdPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStackholdersByUserIdQueryResult>;
    })
  );
}

apiCommonStackholdersGetStackholdersByUserIdPost$Plain.PATH = '/api/Common/Stackholders/GetStackholdersByUserId';
