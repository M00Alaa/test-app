/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompanyQueryResult } from '../../models/get-company-query-result';

export interface GetCompanyGet$Plain$Params {
  Id?: string;
}

export function getCompanyGet$Plain(http: HttpClient, rootUrl: string, params?: GetCompanyGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getCompanyGet$Plain.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCompanyQueryResult>;
    })
  );
}

getCompanyGet$Plain.PATH = '/GetCompany';
