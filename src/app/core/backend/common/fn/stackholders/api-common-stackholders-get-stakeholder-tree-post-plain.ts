/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetStakeholderTreeQuery } from '../../models/get-stakeholder-tree-query';
import { GetStakeholderTreeQueryResult } from '../../models/get-stakeholder-tree-query-result';

export interface ApiCommonStackholdersGetStakeholderTreePost$Plain$Params {
      body?: GetStakeholderTreeQuery
}

export function apiCommonStackholdersGetStakeholderTreePost$Plain(http: HttpClient, rootUrl: string, params?: ApiCommonStackholdersGetStakeholderTreePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetStakeholderTreeQueryResult>> {
  const rb = new RequestBuilder(rootUrl, apiCommonStackholdersGetStakeholderTreePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetStakeholderTreeQueryResult>;
    })
  );
}

apiCommonStackholdersGetStakeholderTreePost$Plain.PATH = '/api/Common/Stackholders/GetStakeholderTree';
