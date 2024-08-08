/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCityCreateCityPost } from '../fn/city/api-city-create-city-post';
import { ApiCityCreateCityPost$Params } from '../fn/city/api-city-create-city-post';
import { apiCityCreateCityPost$Plain } from '../fn/city/api-city-create-city-post-plain';
import { ApiCityCreateCityPost$Plain$Params } from '../fn/city/api-city-create-city-post-plain';
import { apiCityDeleteCityDelete } from '../fn/city/api-city-delete-city-delete';
import { ApiCityDeleteCityDelete$Params } from '../fn/city/api-city-delete-city-delete';
import { apiCityDeleteCityDelete$Plain } from '../fn/city/api-city-delete-city-delete-plain';
import { ApiCityDeleteCityDelete$Plain$Params } from '../fn/city/api-city-delete-city-delete-plain';
import { apiCityGetCitiesPost } from '../fn/city/api-city-get-cities-post';
import { ApiCityGetCitiesPost$Params } from '../fn/city/api-city-get-cities-post';
import { apiCityGetCitiesPost$Plain } from '../fn/city/api-city-get-cities-post-plain';
import { ApiCityGetCitiesPost$Plain$Params } from '../fn/city/api-city-get-cities-post-plain';
import { apiCityGetCityPost } from '../fn/city/api-city-get-city-post';
import { ApiCityGetCityPost$Params } from '../fn/city/api-city-get-city-post';
import { apiCityGetCityPost$Plain } from '../fn/city/api-city-get-city-post-plain';
import { ApiCityGetCityPost$Plain$Params } from '../fn/city/api-city-get-city-post-plain';
import { apiCityUpdateCityPost } from '../fn/city/api-city-update-city-post';
import { ApiCityUpdateCityPost$Params } from '../fn/city/api-city-update-city-post';
import { apiCityUpdateCityPost$Plain } from '../fn/city/api-city-update-city-post-plain';
import { ApiCityUpdateCityPost$Plain$Params } from '../fn/city/api-city-update-city-post-plain';
import { CreateCityCommandResult } from '../models/create-city-command-result';
import { DeleteCityCommandResult } from '../models/delete-city-command-result';
import { GetCitiesQueryResult } from '../models/get-cities-query-result';
import { GetCityQueryResult } from '../models/get-city-query-result';
import { UpdateCityCommandResult } from '../models/update-city-command-result';

@Injectable({ providedIn: 'root' })
export class CityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCityGetCityPost()` */
  static readonly ApiCityGetCityPostPath = '/api/City/GetCity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityGetCityPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCityPost$Plain$Response(params?: ApiCityGetCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCityQueryResult>> {
    return apiCityGetCityPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityGetCityPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCityPost$Plain(params?: ApiCityGetCityPost$Plain$Params, context?: HttpContext): Observable<GetCityQueryResult> {
    return this.apiCityGetCityPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCityQueryResult>): GetCityQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityGetCityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCityPost$Response(params?: ApiCityGetCityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCityQueryResult>> {
    return apiCityGetCityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityGetCityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCityPost(params?: ApiCityGetCityPost$Params, context?: HttpContext): Observable<GetCityQueryResult> {
    return this.apiCityGetCityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCityQueryResult>): GetCityQueryResult => r.body)
    );
  }

  /** Path part for operation `apiCityGetCitiesPost()` */
  static readonly ApiCityGetCitiesPostPath = '/api/City/GetCities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityGetCitiesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCitiesPost$Plain$Response(params?: ApiCityGetCitiesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCitiesQueryResult>> {
    return apiCityGetCitiesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityGetCitiesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCitiesPost$Plain(params?: ApiCityGetCitiesPost$Plain$Params, context?: HttpContext): Observable<GetCitiesQueryResult> {
    return this.apiCityGetCitiesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCitiesQueryResult>): GetCitiesQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityGetCitiesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCitiesPost$Response(params?: ApiCityGetCitiesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCitiesQueryResult>> {
    return apiCityGetCitiesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityGetCitiesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityGetCitiesPost(params?: ApiCityGetCitiesPost$Params, context?: HttpContext): Observable<GetCitiesQueryResult> {
    return this.apiCityGetCitiesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCitiesQueryResult>): GetCitiesQueryResult => r.body)
    );
  }

  /** Path part for operation `apiCityCreateCityPost()` */
  static readonly ApiCityCreateCityPostPath = '/api/City/CreateCity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityCreateCityPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityCreateCityPost$Plain$Response(params?: ApiCityCreateCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCityCommandResult>> {
    return apiCityCreateCityPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityCreateCityPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityCreateCityPost$Plain(params?: ApiCityCreateCityPost$Plain$Params, context?: HttpContext): Observable<CreateCityCommandResult> {
    return this.apiCityCreateCityPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCityCommandResult>): CreateCityCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityCreateCityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityCreateCityPost$Response(params?: ApiCityCreateCityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCityCommandResult>> {
    return apiCityCreateCityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityCreateCityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityCreateCityPost(params?: ApiCityCreateCityPost$Params, context?: HttpContext): Observable<CreateCityCommandResult> {
    return this.apiCityCreateCityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCityCommandResult>): CreateCityCommandResult => r.body)
    );
  }

  /** Path part for operation `apiCityUpdateCityPost()` */
  static readonly ApiCityUpdateCityPostPath = '/api/City/UpdateCity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityUpdateCityPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityUpdateCityPost$Plain$Response(params?: ApiCityUpdateCityPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCityCommandResult>> {
    return apiCityUpdateCityPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityUpdateCityPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityUpdateCityPost$Plain(params?: ApiCityUpdateCityPost$Plain$Params, context?: HttpContext): Observable<UpdateCityCommandResult> {
    return this.apiCityUpdateCityPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateCityCommandResult>): UpdateCityCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityUpdateCityPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityUpdateCityPost$Response(params?: ApiCityUpdateCityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCityCommandResult>> {
    return apiCityUpdateCityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityUpdateCityPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityUpdateCityPost(params?: ApiCityUpdateCityPost$Params, context?: HttpContext): Observable<UpdateCityCommandResult> {
    return this.apiCityUpdateCityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateCityCommandResult>): UpdateCityCommandResult => r.body)
    );
  }

  /** Path part for operation `apiCityDeleteCityDelete()` */
  static readonly ApiCityDeleteCityDeletePath = '/api/City/DeleteCity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityDeleteCityDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityDeleteCityDelete$Plain$Response(params?: ApiCityDeleteCityDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCityCommandResult>> {
    return apiCityDeleteCityDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityDeleteCityDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityDeleteCityDelete$Plain(params?: ApiCityDeleteCityDelete$Plain$Params, context?: HttpContext): Observable<DeleteCityCommandResult> {
    return this.apiCityDeleteCityDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteCityCommandResult>): DeleteCityCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCityDeleteCityDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityDeleteCityDelete$Response(params?: ApiCityDeleteCityDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCityCommandResult>> {
    return apiCityDeleteCityDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCityDeleteCityDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCityDeleteCityDelete(params?: ApiCityDeleteCityDelete$Params, context?: HttpContext): Observable<DeleteCityCommandResult> {
    return this.apiCityDeleteCityDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteCityCommandResult>): DeleteCityCommandResult => r.body)
    );
  }

}
