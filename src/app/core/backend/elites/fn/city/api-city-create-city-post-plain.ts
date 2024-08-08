/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateCityCommand } from '../../models/create-city-command';
import { CreateCityCommandResult } from '../../models/create-city-command-result';

export interface ApiCityCreateCityPost$Plain$Params {
      body?: CreateCityCommand
}

export function apiCityCreateCityPost$Plain(http: HttpClient, rootUrl: string, params?: ApiCityCreateCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCityCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCityCreateCityPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateCityCommandResult>;
    })
  );
}

apiCityCreateCityPost$Plain.PATH = '/api/City/CreateCity';
