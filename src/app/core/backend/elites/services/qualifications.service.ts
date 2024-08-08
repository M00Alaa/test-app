/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiQualificationsCreateQualificationPost } from '../fn/qualifications/api-qualifications-create-qualification-post';
import { ApiQualificationsCreateQualificationPost$Params } from '../fn/qualifications/api-qualifications-create-qualification-post';
import { apiQualificationsCreateQualificationPost$Plain } from '../fn/qualifications/api-qualifications-create-qualification-post-plain';
import { ApiQualificationsCreateQualificationPost$Plain$Params } from '../fn/qualifications/api-qualifications-create-qualification-post-plain';
import { apiQualificationsDeleteQualificationDelete } from '../fn/qualifications/api-qualifications-delete-qualification-delete';
import { ApiQualificationsDeleteQualificationDelete$Params } from '../fn/qualifications/api-qualifications-delete-qualification-delete';
import { apiQualificationsDeleteQualificationDelete$Plain } from '../fn/qualifications/api-qualifications-delete-qualification-delete-plain';
import { ApiQualificationsDeleteQualificationDelete$Plain$Params } from '../fn/qualifications/api-qualifications-delete-qualification-delete-plain';
import { apiQualificationsGetQualificationPost } from '../fn/qualifications/api-qualifications-get-qualification-post';
import { ApiQualificationsGetQualificationPost$Params } from '../fn/qualifications/api-qualifications-get-qualification-post';
import { apiQualificationsGetQualificationPost$Plain } from '../fn/qualifications/api-qualifications-get-qualification-post-plain';
import { ApiQualificationsGetQualificationPost$Plain$Params } from '../fn/qualifications/api-qualifications-get-qualification-post-plain';
import { apiQualificationsGetQualificationsPost } from '../fn/qualifications/api-qualifications-get-qualifications-post';
import { ApiQualificationsGetQualificationsPost$Params } from '../fn/qualifications/api-qualifications-get-qualifications-post';
import { apiQualificationsGetQualificationsPost$Plain } from '../fn/qualifications/api-qualifications-get-qualifications-post-plain';
import { ApiQualificationsGetQualificationsPost$Plain$Params } from '../fn/qualifications/api-qualifications-get-qualifications-post-plain';
import { apiQualificationsUpdateQualificationPost } from '../fn/qualifications/api-qualifications-update-qualification-post';
import { ApiQualificationsUpdateQualificationPost$Params } from '../fn/qualifications/api-qualifications-update-qualification-post';
import { apiQualificationsUpdateQualificationPost$Plain } from '../fn/qualifications/api-qualifications-update-qualification-post-plain';
import { ApiQualificationsUpdateQualificationPost$Plain$Params } from '../fn/qualifications/api-qualifications-update-qualification-post-plain';
import { CreateQualificationCommandResult } from '../models/create-qualification-command-result';
import { DeleteQualificationCommandResult } from '../models/delete-qualification-command-result';
import { GetQualificationQueryResult } from '../models/get-qualification-query-result';
import { GetQualificationsQueryResult } from '../models/get-qualifications-query-result';
import { UpdateQualificationCommandResult } from '../models/update-qualification-command-result';

@Injectable({ providedIn: 'root' })
export class QualificationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiQualificationsGetQualificationPost()` */
  static readonly ApiQualificationsGetQualificationPostPath = '/api/Qualifications/GetQualification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsGetQualificationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationPost$Plain$Response(params?: ApiQualificationsGetQualificationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationQueryResult>> {
    return apiQualificationsGetQualificationPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsGetQualificationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationPost$Plain(params?: ApiQualificationsGetQualificationPost$Plain$Params, context?: HttpContext): Observable<GetQualificationQueryResult> {
    return this.apiQualificationsGetQualificationPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetQualificationQueryResult>): GetQualificationQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsGetQualificationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationPost$Response(params?: ApiQualificationsGetQualificationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationQueryResult>> {
    return apiQualificationsGetQualificationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsGetQualificationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationPost(params?: ApiQualificationsGetQualificationPost$Params, context?: HttpContext): Observable<GetQualificationQueryResult> {
    return this.apiQualificationsGetQualificationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetQualificationQueryResult>): GetQualificationQueryResult => r.body)
    );
  }

  /** Path part for operation `apiQualificationsGetQualificationsPost()` */
  static readonly ApiQualificationsGetQualificationsPostPath = '/api/Qualifications/GetQualifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsGetQualificationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationsPost$Plain$Response(params?: ApiQualificationsGetQualificationsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationsQueryResult>> {
    return apiQualificationsGetQualificationsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsGetQualificationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationsPost$Plain(params?: ApiQualificationsGetQualificationsPost$Plain$Params, context?: HttpContext): Observable<GetQualificationsQueryResult> {
    return this.apiQualificationsGetQualificationsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetQualificationsQueryResult>): GetQualificationsQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsGetQualificationsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationsPost$Response(params?: ApiQualificationsGetQualificationsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetQualificationsQueryResult>> {
    return apiQualificationsGetQualificationsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsGetQualificationsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsGetQualificationsPost(params?: ApiQualificationsGetQualificationsPost$Params, context?: HttpContext): Observable<GetQualificationsQueryResult> {
    return this.apiQualificationsGetQualificationsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetQualificationsQueryResult>): GetQualificationsQueryResult => r.body)
    );
  }

  /** Path part for operation `apiQualificationsCreateQualificationPost()` */
  static readonly ApiQualificationsCreateQualificationPostPath = '/api/Qualifications/CreateQualification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsCreateQualificationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsCreateQualificationPost$Plain$Response(params?: ApiQualificationsCreateQualificationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateQualificationCommandResult>> {
    return apiQualificationsCreateQualificationPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsCreateQualificationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsCreateQualificationPost$Plain(params?: ApiQualificationsCreateQualificationPost$Plain$Params, context?: HttpContext): Observable<CreateQualificationCommandResult> {
    return this.apiQualificationsCreateQualificationPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateQualificationCommandResult>): CreateQualificationCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsCreateQualificationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsCreateQualificationPost$Response(params?: ApiQualificationsCreateQualificationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateQualificationCommandResult>> {
    return apiQualificationsCreateQualificationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsCreateQualificationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsCreateQualificationPost(params?: ApiQualificationsCreateQualificationPost$Params, context?: HttpContext): Observable<CreateQualificationCommandResult> {
    return this.apiQualificationsCreateQualificationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateQualificationCommandResult>): CreateQualificationCommandResult => r.body)
    );
  }

  /** Path part for operation `apiQualificationsUpdateQualificationPost()` */
  static readonly ApiQualificationsUpdateQualificationPostPath = '/api/Qualifications/UpdateQualification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsUpdateQualificationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsUpdateQualificationPost$Plain$Response(params?: ApiQualificationsUpdateQualificationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateQualificationCommandResult>> {
    return apiQualificationsUpdateQualificationPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsUpdateQualificationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsUpdateQualificationPost$Plain(params?: ApiQualificationsUpdateQualificationPost$Plain$Params, context?: HttpContext): Observable<UpdateQualificationCommandResult> {
    return this.apiQualificationsUpdateQualificationPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateQualificationCommandResult>): UpdateQualificationCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsUpdateQualificationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsUpdateQualificationPost$Response(params?: ApiQualificationsUpdateQualificationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateQualificationCommandResult>> {
    return apiQualificationsUpdateQualificationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsUpdateQualificationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsUpdateQualificationPost(params?: ApiQualificationsUpdateQualificationPost$Params, context?: HttpContext): Observable<UpdateQualificationCommandResult> {
    return this.apiQualificationsUpdateQualificationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateQualificationCommandResult>): UpdateQualificationCommandResult => r.body)
    );
  }

  /** Path part for operation `apiQualificationsDeleteQualificationDelete()` */
  static readonly ApiQualificationsDeleteQualificationDeletePath = '/api/Qualifications/DeleteQualification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsDeleteQualificationDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsDeleteQualificationDelete$Plain$Response(params?: ApiQualificationsDeleteQualificationDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteQualificationCommandResult>> {
    return apiQualificationsDeleteQualificationDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsDeleteQualificationDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsDeleteQualificationDelete$Plain(params?: ApiQualificationsDeleteQualificationDelete$Plain$Params, context?: HttpContext): Observable<DeleteQualificationCommandResult> {
    return this.apiQualificationsDeleteQualificationDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteQualificationCommandResult>): DeleteQualificationCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiQualificationsDeleteQualificationDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsDeleteQualificationDelete$Response(params?: ApiQualificationsDeleteQualificationDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteQualificationCommandResult>> {
    return apiQualificationsDeleteQualificationDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiQualificationsDeleteQualificationDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiQualificationsDeleteQualificationDelete(params?: ApiQualificationsDeleteQualificationDelete$Params, context?: HttpContext): Observable<DeleteQualificationCommandResult> {
    return this.apiQualificationsDeleteQualificationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteQualificationCommandResult>): DeleteQualificationCommandResult => r.body)
    );
  }

}
