/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUsersByStackHolderQueryResult } from '../../models/get-users-by-stack-holder-query-result';

export interface ApiCommonStackholdersGetUsersByStackHolderPost$Plain$Params {
      body?: {
'StackholderId'?: number;
}
}

export function apiCommonStackholdersGetUsersByStackHolderPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetUsersByStackHolderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersByStackHolderQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetUsersByStackHolderPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUsersByStackHolderQueryResult>;
    })
  );
}

apiCommonStackholdersGetUsersByStackHolderPost$Plain.PATH = '/api/Common/Stackholders/GetUsersByStackHolder';
