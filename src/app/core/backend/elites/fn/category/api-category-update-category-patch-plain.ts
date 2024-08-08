/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateCategoryCommand } from '../../models/update-category-command';
import { UpdateCategoryCommandResult } from '../../models/update-category-command-result';

export interface ApiCategoryUpdateCategoryPatch$Plain$Params {
      body?: UpdateCategoryCommand
}

export function apiCategoryUpdateCategoryPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiCategoryUpdateCategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCategoryCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiCategoryUpdateCategoryPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateCategoryCommandResult>;
    })
  );
}

apiCategoryUpdateCategoryPatch$Plain.PATH = '/api/Category/UpdateCategory';