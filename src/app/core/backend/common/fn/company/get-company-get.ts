/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetCompanyQueryResult } from '../../models/get-company-query-result';

export interface GetCompanyGet$Params {
  Id?: string;
}

export function getCompanyGet(http: HttpClient, rootUrl: string, params?: GetCompanyGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCompanyQueryResult>> {
  const rb = new RequestBuilder(rootUrl, getCompanyGet.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetCompanyQueryResult>;
    })
  );
}

getCompanyGet.PATH = '/GetCompany';
