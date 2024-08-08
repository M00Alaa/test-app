/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMainCategoryCreateMainCategoryPost } from '../fn/main-category/api-main-category-create-main-category-post';
import { ApiMainCategoryCreateMainCategoryPost$Params } from '../fn/main-category/api-main-category-create-main-category-post';
import { apiMainCategoryCreateMainCategoryPost$Plain } from '../fn/main-category/api-main-category-create-main-category-post-plain';
import { ApiMainCategoryCreateMainCategoryPost$Plain$Params } from '../fn/main-category/api-main-category-create-main-category-post-plain';
import { apiMainCategoryDeleteMainCategoryDelete } from '../fn/main-category/api-main-category-delete-main-category-delete';
import { ApiMainCategoryDeleteMainCategoryDelete$Params } from '../fn/main-category/api-main-category-delete-main-category-delete';
import { apiMainCategoryDeleteMainCategoryDelete$Plain } from '../fn/main-category/api-main-category-delete-main-category-delete-plain';
import { ApiMainCategoryDeleteMainCategoryDelete$Plain$Params } from '../fn/main-category/api-main-category-delete-main-category-delete-plain';
import { apiMainCategoryGetMainCategoriesPost } from '../fn/main-category/api-main-category-get-main-categories-post';
import { ApiMainCategoryGetMainCategoriesPost$Params } from '../fn/main-category/api-main-category-get-main-categories-post';
import { apiMainCategoryGetMainCategoriesPost$Plain } from '../fn/main-category/api-main-category-get-main-categories-post-plain';
import { ApiMainCategoryGetMainCategoriesPost$Plain$Params } from '../fn/main-category/api-main-category-get-main-categories-post-plain';
import { apiMainCategoryGetMainCategoryPost } from '../fn/main-category/api-main-category-get-main-category-post';
import { ApiMainCategoryGetMainCategoryPost$Params } from '../fn/main-category/api-main-category-get-main-category-post';
import { apiMainCategoryGetMainCategoryPost$Plain } from '../fn/main-category/api-main-category-get-main-category-post-plain';
import { ApiMainCategoryGetMainCategoryPost$Plain$Params } from '../fn/main-category/api-main-category-get-main-category-post-plain';
import { apiMainCategoryUpdateMainCategoryPatch } from '../fn/main-category/api-main-category-update-main-category-patch';
import { ApiMainCategoryUpdateMainCategoryPatch$Params } from '../fn/main-category/api-main-category-update-main-category-patch';
import { apiMainCategoryUpdateMainCategoryPatch$Plain } from '../fn/main-category/api-main-category-update-main-category-patch-plain';
import { ApiMainCategoryUpdateMainCategoryPatch$Plain$Params } from '../fn/main-category/api-main-category-update-main-category-patch-plain';
import { CreateMainCategoryCommandResult } from '../models/create-main-category-command-result';
import { DeleteMainCategoryCommandResult } from '../models/delete-main-category-command-result';
import { GetMainCategoriesQueryResult } from '../models/get-main-categories-query-result';
import { GetMainCategoryQueryResult } from '../models/get-main-category-query-result';
import { UpdateMainCategoryCommandResult } from '../models/update-main-category-command-result';

@Injectable({ providedIn: 'root' })
export class MainCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMainCategoryGetMainCategoriesPost()` */
  static readonly ApiMainCategoryGetMainCategoriesPostPath = '/api/MainCategory/GetMainCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryGetMainCategoriesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoriesPost$Plain$Response(params?: ApiMainCategoryGetMainCategoriesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoriesQueryResult>> {
    return apiMainCategoryGetMainCategoriesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryGetMainCategoriesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoriesPost$Plain(params?: ApiMainCategoryGetMainCategoriesPost$Plain$Params, context?: HttpContext): Observable<GetMainCategoriesQueryResult> {
    return this.apiMainCategoryGetMainCategoriesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetMainCategoriesQueryResult>): GetMainCategoriesQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryGetMainCategoriesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoriesPost$Response(params?: ApiMainCategoryGetMainCategoriesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoriesQueryResult>> {
    return apiMainCategoryGetMainCategoriesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryGetMainCategoriesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoriesPost(params?: ApiMainCategoryGetMainCategoriesPost$Params, context?: HttpContext): Observable<GetMainCategoriesQueryResult> {
    return this.apiMainCategoryGetMainCategoriesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetMainCategoriesQueryResult>): GetMainCategoriesQueryResult => r.body)
    );
  }

  /** Path part for operation `apiMainCategoryGetMainCategoryPost()` */
  static readonly ApiMainCategoryGetMainCategoryPostPath = '/api/MainCategory/GetMainCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryGetMainCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoryPost$Plain$Response(params?: ApiMainCategoryGetMainCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoryQueryResult>> {
    return apiMainCategoryGetMainCategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryGetMainCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoryPost$Plain(params?: ApiMainCategoryGetMainCategoryPost$Plain$Params, context?: HttpContext): Observable<GetMainCategoryQueryResult> {
    return this.apiMainCategoryGetMainCategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetMainCategoryQueryResult>): GetMainCategoryQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryGetMainCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoryPost$Response(params?: ApiMainCategoryGetMainCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetMainCategoryQueryResult>> {
    return apiMainCategoryGetMainCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryGetMainCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryGetMainCategoryPost(params?: ApiMainCategoryGetMainCategoryPost$Params, context?: HttpContext): Observable<GetMainCategoryQueryResult> {
    return this.apiMainCategoryGetMainCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetMainCategoryQueryResult>): GetMainCategoryQueryResult => r.body)
    );
  }

  /** Path part for operation `apiMainCategoryCreateMainCategoryPost()` */
  static readonly ApiMainCategoryCreateMainCategoryPostPath = '/api/MainCategory/CreateMainCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryCreateMainCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryCreateMainCategoryPost$Plain$Response(params?: ApiMainCategoryCreateMainCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMainCategoryCommandResult>> {
    return apiMainCategoryCreateMainCategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryCreateMainCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryCreateMainCategoryPost$Plain(params?: ApiMainCategoryCreateMainCategoryPost$Plain$Params, context?: HttpContext): Observable<CreateMainCategoryCommandResult> {
    return this.apiMainCategoryCreateMainCategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateMainCategoryCommandResult>): CreateMainCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryCreateMainCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryCreateMainCategoryPost$Response(params?: ApiMainCategoryCreateMainCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateMainCategoryCommandResult>> {
    return apiMainCategoryCreateMainCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryCreateMainCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryCreateMainCategoryPost(params?: ApiMainCategoryCreateMainCategoryPost$Params, context?: HttpContext): Observable<CreateMainCategoryCommandResult> {
    return this.apiMainCategoryCreateMainCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateMainCategoryCommandResult>): CreateMainCategoryCommandResult => r.body)
    );
  }

  /** Path part for operation `apiMainCategoryUpdateMainCategoryPatch()` */
  static readonly ApiMainCategoryUpdateMainCategoryPatchPath = '/api/MainCategory/UpdateMainCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryUpdateMainCategoryPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryUpdateMainCategoryPatch$Plain$Response(params?: ApiMainCategoryUpdateMainCategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateMainCategoryCommandResult>> {
    return apiMainCategoryUpdateMainCategoryPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryUpdateMainCategoryPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryUpdateMainCategoryPatch$Plain(params?: ApiMainCategoryUpdateMainCategoryPatch$Plain$Params, context?: HttpContext): Observable<UpdateMainCategoryCommandResult> {
    return this.apiMainCategoryUpdateMainCategoryPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateMainCategoryCommandResult>): UpdateMainCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryUpdateMainCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryUpdateMainCategoryPatch$Response(params?: ApiMainCategoryUpdateMainCategoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateMainCategoryCommandResult>> {
    return apiMainCategoryUpdateMainCategoryPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryUpdateMainCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryUpdateMainCategoryPatch(params?: ApiMainCategoryUpdateMainCategoryPatch$Params, context?: HttpContext): Observable<UpdateMainCategoryCommandResult> {
    return this.apiMainCategoryUpdateMainCategoryPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateMainCategoryCommandResult>): UpdateMainCategoryCommandResult => r.body)
    );
  }

  /** Path part for operation `apiMainCategoryDeleteMainCategoryDelete()` */
  static readonly ApiMainCategoryDeleteMainCategoryDeletePath = '/api/MainCategory/DeleteMainCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryDeleteMainCategoryDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryDeleteMainCategoryDelete$Plain$Response(params?: ApiMainCategoryDeleteMainCategoryDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteMainCategoryCommandResult>> {
    return apiMainCategoryDeleteMainCategoryDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryDeleteMainCategoryDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryDeleteMainCategoryDelete$Plain(params?: ApiMainCategoryDeleteMainCategoryDelete$Plain$Params, context?: HttpContext): Observable<DeleteMainCategoryCommandResult> {
    return this.apiMainCategoryDeleteMainCategoryDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteMainCategoryCommandResult>): DeleteMainCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCategoryDeleteMainCategoryDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryDeleteMainCategoryDelete$Response(params?: ApiMainCategoryDeleteMainCategoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteMainCategoryCommandResult>> {
    return apiMainCategoryDeleteMainCategoryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCategoryDeleteMainCategoryDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMainCategoryDeleteMainCategoryDelete(params?: ApiMainCategoryDeleteMainCategoryDelete$Params, context?: HttpContext): Observable<DeleteMainCategoryCommandResult> {
    return this.apiMainCategoryDeleteMainCategoryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteMainCategoryCommandResult>): DeleteMainCategoryCommandResult => r.body)
    );
  }

}
