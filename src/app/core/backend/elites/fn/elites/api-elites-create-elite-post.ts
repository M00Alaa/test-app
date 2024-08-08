/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateEliteCommandResult } from '../../models/create-elite-command-result';

export interface ApiElitesCreateElitePost$Params {
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

export function apiElitesCreateElitePost(http: HttpClient, rootUrl: string, params?: ApiElitesCreateElitePost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateEliteCommandResult>> {
  const rb = new RequestBuilder(rootUrl, apiElitesCreateElitePost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateEliteCommandResult>;
    })
  );
}

apiElitesCreateElitePost.PATH = '/api/Elites/CreateElite';
