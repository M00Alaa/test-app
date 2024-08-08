/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateCityCommand } from '../../models/update-city-command';
import { UpdateCityCommandResult } from '../../models/update-city-command-result';

export interface ApiCityUpdateCityPost$Plain$Params {
      body?: UpdateCityCommand
}

export function apiCityUpdateCityPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCityUpdateCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCityCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityUpdateCityPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateCityCommandResult>;
    })
  );
}

apiCityUpdateCityPost$Plain.PATH = '/api/City/UpdateCity';
