/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiElitesCreateElitePost } from '../fn/elites/api-elites-create-elite-post';
import { ApiElitesCreateElitePost$Params } from '../fn/elites/api-elites-create-elite-post';
import { apiElitesCreateElitePost$Plain } from '../fn/elites/api-elites-create-elite-post-plain';
import { ApiElitesCreateElitePost$Plain$Params } from '../fn/elites/api-elites-create-elite-post-plain';
import { apiElitesDeleteEliteDelete } from '../fn/elites/api-elites-delete-elite-delete';
import { ApiElitesDeleteEliteDelete$Params } from '../fn/elites/api-elites-delete-elite-delete';
import { apiElitesDeleteEliteDelete$Plain } from '../fn/elites/api-elites-delete-elite-delete-plain';
import { ApiElitesDeleteEliteDelete$Plain$Params } from '../fn/elites/api-elites-delete-elite-delete-plain';
import { apiElitesGetElitesPost } from '../fn/elites/api-elites-get-elites-post';
import { ApiElitesGetElitesPost$Params } from '../fn/elites/api-elites-get-elites-post';
import { apiElitesGetElitesPost$Plain } from '../fn/elites/api-elites-get-elites-post-plain';
import { ApiElitesGetElitesPost$Plain$Params } from '../fn/elites/api-elites-get-elites-post-plain';
import { apiElitesUpdateElitePost } from '../fn/elites/api-elites-update-elite-post';
import { ApiElitesUpdateElitePost$Params } from '../fn/elites/api-elites-update-elite-post';
import { apiElitesUpdateElitePost$Plain } from '../fn/elites/api-elites-update-elite-post-plain';
import { ApiElitesUpdateElitePost$Plain$Params } from '../fn/elites/api-elites-update-elite-post-plain';
import { CreateEliteCommandResult } from '../models/create-elite-command-result';
import { DeleteEliteCommandResult } from '../models/delete-elite-command-result';
import { GetElitesQueryResult } from '../models/get-elites-query-result';
import { UpdateEliteCommandResult } from '../models/update-elite-command-result';

@Injectable({ providedIn: 'root' })
export class ElitesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiElitesGetElitesPost()` */
  static readonly ApiElitesGetElitesPostPath = '/api/Elites/GetElites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesGetElitesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesGetElitesPost$Plain$Response(params?: ApiElitesGetElitesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetElitesQueryResult>> {
    return apiElitesGetElitesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesGetElitesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesGetElitesPost$Plain(params?: ApiElitesGetElitesPost$Plain$Params, context?: HttpContext): Observable<GetElitesQueryResult> {
    return this.apiElitesGetElitesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetElitesQueryResult>): GetElitesQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesGetElitesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesGetElitesPost$Response(params?: ApiElitesGetElitesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetElitesQueryResult>> {
    return apiElitesGetElitesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesGetElitesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesGetElitesPost(params?: ApiElitesGetElitesPost$Params, context?: HttpContext): Observable<GetElitesQueryResult> {
    return this.apiElitesGetElitesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetElitesQueryResult>): GetElitesQueryResult => r.body)
    );
  }

  /** Path part for operation `apiElitesCreateElitePost()` */
  static readonly ApiElitesCreateElitePostPath = '/api/Elites/CreateElite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesCreateElitePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesCreateElitePost$Plain$Response(params?: ApiElitesCreateElitePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateEliteCommandResult>> {
    return apiElitesCreateElitePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesCreateElitePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesCreateElitePost$Plain(params?: ApiElitesCreateElitePost$Plain$Params, context?: HttpContext): Observable<CreateEliteCommandResult> {
    return this.apiElitesCreateElitePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateEliteCommandResult>): CreateEliteCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesCreateElitePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesCreateElitePost$Response(params?: ApiElitesCreateElitePost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateEliteCommandResult>> {
    return apiElitesCreateElitePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesCreateElitePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesCreateElitePost(params?: ApiElitesCreateElitePost$Params, context?: HttpContext): Observable<CreateEliteCommandResult> {
    return this.apiElitesCreateElitePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateEliteCommandResult>): CreateEliteCommandResult => r.body)
    );
  }

  /** Path part for operation `apiElitesUpdateElitePost()` */
  static readonly ApiElitesUpdateElitePostPath = '/api/Elites/UpdateElite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesUpdateElitePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesUpdateElitePost$Plain$Response(params?: ApiElitesUpdateElitePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateEliteCommandResult>> {
    return apiElitesUpdateElitePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesUpdateElitePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesUpdateElitePost$Plain(params?: ApiElitesUpdateElitePost$Plain$Params, context?: HttpContext): Observable<UpdateEliteCommandResult> {
    return this.apiElitesUpdateElitePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateEliteCommandResult>): UpdateEliteCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesUpdateElitePost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesUpdateElitePost$Response(params?: ApiElitesUpdateElitePost$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateEliteCommandResult>> {
    return apiElitesUpdateElitePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesUpdateElitePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiElitesUpdateElitePost(params?: ApiElitesUpdateElitePost$Params, context?: HttpContext): Observable<UpdateEliteCommandResult> {
    return this.apiElitesUpdateElitePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateEliteCommandResult>): UpdateEliteCommandResult => r.body)
    );
  }

  /** Path part for operation `apiElitesDeleteEliteDelete()` */
  static readonly ApiElitesDeleteEliteDeletePath = '/api/Elites/DeleteElite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesDeleteEliteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesDeleteEliteDelete$Plain$Response(params?: ApiElitesDeleteEliteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteEliteCommandResult>> {
    return apiElitesDeleteEliteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesDeleteEliteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesDeleteEliteDelete$Plain(params?: ApiElitesDeleteEliteDelete$Plain$Params, context?: HttpContext): Observable<DeleteEliteCommandResult> {
    return this.apiElitesDeleteEliteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteEliteCommandResult>): DeleteEliteCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiElitesDeleteEliteDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesDeleteEliteDelete$Response(params?: ApiElitesDeleteEliteDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteEliteCommandResult>> {
    return apiElitesDeleteEliteDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiElitesDeleteEliteDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiElitesDeleteEliteDelete(params?: ApiElitesDeleteEliteDelete$Params, context?: HttpContext): Observable<DeleteEliteCommandResult> {
    return this.apiElitesDeleteEliteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteEliteCommandResult>): DeleteEliteCommandResult => r.body)
    );
  }

}
