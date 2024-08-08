/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetUsersByStackHolderQueryResult } from '../../models/get-users-by-stack-holder-query-result';

export interface ApiCommonStackholdersGetUsersByStackHolderPost$Params {
      body?: {
'StackholderId'?: number;
}
}

export function apiCommonStackholdersGetUsersByStackHolderPost(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetUsersByStackHolderPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersByStackHolderQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetUsersByStackHolderPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetUsersByStackHolderQueryResult>;
    })
  );
}

apiCommonStackholdersGetUsersByStackHolderPost.PATH = '/api/Common/Stackholders/GetUsersByStackHolder';
