/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteMainCategoryCommand } from '../../models/delete-main-category-command';
import { DeleteMainCategoryCommandResult } from '../../models/delete-main-category-command-result';

export interface ApiMainCategoryDeleteMainCategoryDelete$Params {
      body?: DeleteMainCategoryCommand
}

export function apiMainCategoryDeleteMainCategoryDelete(http: HttpClient, rootUrl: string, params?: ApiMainCategoryDeleteMainCategoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteMainCategoryCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiMainCategoryDeleteMainCategoryDelete.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteMainCategoryCommandResult>;
    })
  );
}

apiMainCategoryDeleteMainCategoryDelete.PATH = '/api/MainCategory/DeleteMainCategory';
