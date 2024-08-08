/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DeleteAttachmentCommandResult } from '../models/delete-attachment-command-result';
import { deleteFilePost } from '../fn/attachment/delete-file-post';
import { DeleteFilePost$Params } from '../fn/attachment/delete-file-post';
import { deleteFilePost$Plain } from '../fn/attachment/delete-file-post-plain';
import { DeleteFilePost$Plain$Params } from '../fn/attachment/delete-file-post-plain';

@Injectable({ providedIn: 'root' })
export class AttachmentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `deleteFilePost()` */
  static readonly DeleteFilePostPath = '/DeleteFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFilePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  deleteFilePost$Plain$Response(params?: DeleteFilePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteAttachmentCommandResult>> {
    return deleteFilePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFilePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  deleteFilePost$Plain(params?: DeleteFilePost$Plain$Params, context?: HttpContext): Observable<DeleteAttachmentCommandResult> {
    return this.deleteFilePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteAttachmentCommandResult>): DeleteAttachmentCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFilePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  deleteFilePost$Response(params?: DeleteFilePost$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteAttachmentCommandResult>> {
    return deleteFilePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFilePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  deleteFilePost(params?: DeleteFilePost$Params, context?: HttpContext): Observable<DeleteAttachmentCommandResult> {
    return this.deleteFilePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteAttachmentCommandResult>): DeleteAttachmentCommandResult => r.body)
    );
  }

}
