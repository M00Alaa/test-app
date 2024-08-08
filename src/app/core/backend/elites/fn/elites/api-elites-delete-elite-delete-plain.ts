/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteEliteCommand } from '../../models/delete-elite-command';
import { DeleteEliteCommandResult } from '../../models/delete-elite-command-result';

export interface ApiElitesDeleteEliteDelete$Plain$Params {
      body?: DeleteEliteCommand
}

export function apiElitesDeleteEliteDelete$Plain(http: HttpClient, rootUrl: string, params?: ApiElitesDeleteEliteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteEliteCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiElitesDeleteEliteDelete$Plain.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteEliteCommandResult>;
    })
  );
}

apiElitesDeleteEliteDelete$Plain.PATH = '/api/Elites/DeleteElite';
