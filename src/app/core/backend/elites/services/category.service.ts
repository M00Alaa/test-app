/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoryCreateCategoryPost } from '../fn/category/api-category-create-category-post';
import { ApiCategoryCreateCategoryPost$Params } from '../fn/category/api-category-create-category-post';
import { apiCategoryCreateCategoryPost$Plain } from '../fn/category/api-category-create-category-post-plain';
import { ApiCategoryCreateCategoryPost$Plain$Params } from '../fn/category/api-category-create-category-post-plain';
import { apiCategoryDeleteCategoryDelete } from '../fn/category/api-category-delete-category-delete';
import { ApiCategoryDeleteCategoryDelete$Params } from '../fn/category/api-category-delete-category-delete';
import { apiCategoryDeleteCategoryDelete$Plain } from '../fn/category/api-category-delete-category-delete-plain';
import { ApiCategoryDeleteCategoryDelete$Plain$Params } from '../fn/category/api-category-delete-category-delete-plain';
import { apiCategoryGetCategoriesPost } from '../fn/category/api-category-get-categories-post';
import { ApiCategoryGetCategoriesPost$Params } from '../fn/category/api-category-get-categories-post';
import { apiCategoryGetCategoriesPost$Plain } from '../fn/category/api-category-get-categories-post-plain';
import { ApiCategoryGetCategoriesPost$Plain$Params } from '../fn/category/api-category-get-categories-post-plain';
import { apiCategoryGetCategoryPost } from '../fn/category/api-category-get-category-post';
import { ApiCategoryGetCategoryPost$Params } from '../fn/category/api-category-get-category-post';
import { apiCategoryGetCategoryPost$Plain } from '../fn/category/api-category-get-category-post-plain';
import { ApiCategoryGetCategoryPost$Plain$Params } from '../fn/category/api-category-get-category-post-plain';
import { apiCategoryUpdateCategoryPatch } from '../fn/category/api-category-update-category-patch';
import { ApiCategoryUpdateCategoryPatch$Params } from '../fn/category/api-category-update-category-patch';
import { apiCategoryUpdateCategoryPatch$Plain } from '../fn/category/api-category-update-category-patch-plain';
import { ApiCategoryUpdateCategoryPatch$Plain$Params } from '../fn/category/api-category-update-category-patch-plain';
import { CreateCategoryCommandResult } from '../models/create-category-command-result';
import { DeleteCategoryCommandResult } from '../models/delete-category-command-result';
import { GetCategoriesQueryResult } from '../models/get-categories-query-result';
import { GetCategoryQueryResult } from '../models/get-category-query-result';
import { UpdateCategoryCommandResult } from '../models/update-category-command-result';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCategoryGetCategoriesPost()` */
  static readonly ApiCategoryGetCategoriesPostPath = '/api/Category/GetCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoriesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoriesPost$Plain$Response(params?: ApiCategoryGetCategoriesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoriesQueryResult>> {
    return apiCategoryGetCategoriesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoriesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoriesPost$Plain(params?: ApiCategoryGetCategoriesPost$Plain$Params, context?: HttpContext): Observable<GetCategoriesQueryResult> {
    return this.apiCategoryGetCategoriesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCategoriesQueryResult>): GetCategoriesQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoriesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoriesPost$Response(params?: ApiCategoryGetCategoriesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoriesQueryResult>> {
    return apiCategoryGetCategoriesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoriesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoriesPost(params?: ApiCategoryGetCategoriesPost$Params, context?: HttpContext): Observable<GetCategoriesQueryResult> {
    return this.apiCategoryGetCategoriesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCategoriesQueryResult>): GetCategoriesQueryResult => r.body)
    );
  }

  /** Path part for operation `apiCategoryGetCategoryPost()` */
  static readonly ApiCategoryGetCategoryPostPath = '/api/Category/GetCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoryPost$Plain$Response(params?: ApiCategoryGetCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoryQueryResult>> {
    return apiCategoryGetCategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoryPost$Plain(params?: ApiCategoryGetCategoryPost$Plain$Params, context?: HttpContext): Observable<GetCategoryQueryResult> {
    return this.apiCategoryGetCategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCategoryQueryResult>): GetCategoryQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoryPost$Response(params?: ApiCategoryGetCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetCategoryQueryResult>> {
    return apiCategoryGetCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryGetCategoryPost(params?: ApiCategoryGetCategoryPost$Params, context?: HttpContext): Observable<GetCategoryQueryResult> {
    return this.apiCategoryGetCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCategoryQueryResult>): GetCategoryQueryResult => r.body)
    );
  }

  /** Path part for operation `apiCategoryCreateCategoryPost()` */
  static readonly ApiCategoryCreateCategoryPostPath = '/api/Category/CreateCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCreateCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Plain$Response(params?: ApiCategoryCreateCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCategoryCommandResult>> {
    return apiCategoryCreateCategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Plain(params?: ApiCategoryCreateCategoryPost$Plain$Params, context?: HttpContext): Observable<CreateCategoryCommandResult> {
    return this.apiCategoryCreateCategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCategoryCommandResult>): CreateCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCreateCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Response(params?: ApiCategoryCreateCategoryPost$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateCategoryCommandResult>> {
    return apiCategoryCreateCategoryPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost(params?: ApiCategoryCreateCategoryPost$Params, context?: HttpContext): Observable<CreateCategoryCommandResult> {
    return this.apiCategoryCreateCategoryPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateCategoryCommandResult>): CreateCategoryCommandResult => r.body)
    );
  }

  /** Path part for operation `apiCategoryUpdateCategoryPatch()` */
  static readonly ApiCategoryUpdateCategoryPatchPath = '/api/Category/UpdateCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdateCategoryPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPatch$Plain$Response(params?: ApiCategoryUpdateCategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCategoryCommandResult>> {
    return apiCategoryUpdateCategoryPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPatch$Plain(params?: ApiCategoryUpdateCategoryPatch$Plain$Params, context?: HttpContext): Observable<UpdateCategoryCommandResult> {
    return this.apiCategoryUpdateCategoryPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateCategoryCommandResult>): UpdateCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdateCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPatch$Response(params?: ApiCategoryUpdateCategoryPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateCategoryCommandResult>> {
    return apiCategoryUpdateCategoryPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPatch(params?: ApiCategoryUpdateCategoryPatch$Params, context?: HttpContext): Observable<UpdateCategoryCommandResult> {
    return this.apiCategoryUpdateCategoryPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateCategoryCommandResult>): UpdateCategoryCommandResult => r.body)
    );
  }

  /** Path part for operation `apiCategoryDeleteCategoryDelete()` */
  static readonly ApiCategoryDeleteCategoryDeletePath = '/api/Category/DeleteCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteCategoryDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Plain$Response(params?: ApiCategoryDeleteCategoryDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCategoryCommandResult>> {
    return apiCategoryDeleteCategoryDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Plain(params?: ApiCategoryDeleteCategoryDelete$Plain$Params, context?: HttpContext): Observable<DeleteCategoryCommandResult> {
    return this.apiCategoryDeleteCategoryDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteCategoryCommandResult>): DeleteCategoryCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteCategoryDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Response(params?: ApiCategoryDeleteCategoryDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteCategoryCommandResult>> {
    return apiCategoryDeleteCategoryDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete(params?: ApiCategoryDeleteCategoryDelete$Params, context?: HttpContext): Observable<DeleteCategoryCommandResult> {
    return this.apiCategoryDeleteCategoryDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteCategoryCommandResult>): DeleteCategoryCommandResult => r.body)
    );
  }

}
