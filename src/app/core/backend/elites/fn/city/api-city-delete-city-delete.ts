/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteCityCommand } from '../../models/delete-city-command';
import { DeleteCityCommandResult } from '../../models/delete-city-command-result';

export interface ApiCityDeleteCityDelete$Params {
      body?: DeleteCityCommand
}

export function apiCityDeleteCityDelete(http: HttpClient, rootUrl: string, params?: ApiCityDeleteCityDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCityCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityDeleteCityDelete.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteCityCommandResult>;
    })
  );
}

apiCityDeleteCityDelete.PATH = '/api/City/DeleteCity';
