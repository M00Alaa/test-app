/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DeleteAttachmentCommandResult } from '../../models/delete-attachment-command-result';

export interface DeleteFilePost$Plain$Params {
      body?: {
'Url'?: string;
}
}

export function deleteFilePost$Plain(http: HttpClient, rootUrl: string, params?: DeleteFilePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteAttachmentCommandResult>> {
  const rb = new RequestBuilder(rootUrl, deleteFilePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DeleteAttachmentCommandResult>;
    })
  );
}

deleteFilePost$Plain.PATH = '/DeleteFile';
