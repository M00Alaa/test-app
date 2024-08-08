/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStackholdersQuery } from '../../models/get-stackholders-query';
import { GetStackholdersQueryResult } from '../../models/get-stackholders-query-result';

export interface ApiCommonStackholdersGetStackholdersPost$Params {
      body?: GetStackholdersQuery
}

export function apiCommonStackholdersGetStackholdersPost(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetStackholdersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStackholdersQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetStackholdersPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStackholdersQueryResult>;
    })
  );
}

apiCommonStackholdersGetStackholdersPost.PATH = '/api/Common/Stackholders/GetStackholders';