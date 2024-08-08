/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateEliteCommandResult } from '../../models/create-elite-command-result';

export interface ApiElitesCreateElitePost$Plain$Params {
      body?: {
'Name': string;
'Position'?: string;
'Workplace'?: string;
'BestAchievement'?: string;
'PhoneNumber'?: string;
'Email'?: string;
'Notes'?: string;
'SocialUrl'?: string;
'CityId': string;
'CategoryId'?: string;
'QualificationId'?: string;
'Attachments'?: Array<Blob>;
'ProfilePicture'?: Array<Blob>;
}
}

export function apiElitesCreateElitePost$Plain(http: HttpClient, rootUrl: string, params?: ApiElitesCreateElitePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateEliteCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiElitesCreateElitePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateEliteCommandResult>;
    })
  );
}

apiElitesCreateElitePost$Plain.PATH = '/api/Elites/CreateElite';
