/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompaniesQueries } from '../../models/get-companies-queries';
import { GetCompaniesQueriesResult } from '../../models/get-companies-queries-result';

export interface GetCompaniesPost$Plain$Params {
      body?: GetCompaniesQueries
}

export function getCompaniesPost$Plain(http: HttpClient, rootUrl: string, params?: GetCompaniesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompaniesQueriesResult>> {
  const rb = new RequestBuilder(rootUrl, getCompaniesPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCompaniesQueriesResult>;
    })
  );
}

getCompaniesPost$Plain.PATH = '/GetCompanies';
