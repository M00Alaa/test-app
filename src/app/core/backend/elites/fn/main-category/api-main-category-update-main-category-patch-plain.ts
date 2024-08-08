/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateMainCategoryCommand } from '../../models/update-main-category-command';
import { UpdateMainCategoryCommandResult } from '../../models/update-main-category-command-result';

export interface ApiMainCategoryUpdateMainCategoryPatch$Plain$Params {
      body?: UpdateMainCategoryCommand
}

export function apiMainCategoryUpdateMainCategoryPatch$Plain(http: HttpClient, rootUrl: string, params?: ApiMainCategoryUpdateMainCategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateMainCategoryCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiMainCategoryUpdateMainCategoryPatch$Plain.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UpdateMainCategoryCommandResult>;
    })
  );
}

apiMainCategoryUpdateMainCategoryPatch$Plain.PATH = '/api/MainCategory/UpdateMainCategory';
