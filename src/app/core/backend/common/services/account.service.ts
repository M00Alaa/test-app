/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ChangePasswordCommandResult } from '../models/change-password-command-result';
import { changeUserPasswordPost } from '../fn/account/change-user-password-post';
import { ChangeUserPasswordPost$Params } from '../fn/account/change-user-password-post';
import { changeUserPasswordPost$Plain } from '../fn/account/change-user-password-post-plain';
import { ChangeUserPasswordPost$Plain$Params } from '../fn/account/change-user-password-post-plain';
import { DeleteUserCommandResult } from '../models/delete-user-command-result';
import { deleteUserDelete } from '../fn/account/delete-user-delete';
import { DeleteUserDelete$Params } from '../fn/account/delete-user-delete';
import { deleteUserDelete$Plain } from '../fn/account/delete-user-delete-plain';
import { DeleteUserDelete$Plain$Params } from '../fn/account/delete-user-delete-plain';
import { getAllUsersPost } from '../fn/account/get-all-users-post';
import { GetAllUsersPost$Params } from '../fn/account/get-all-users-post';
import { getAllUsersPost$Plain } from '../fn/account/get-all-users-post-plain';
import { GetAllUsersPost$Plain$Params } from '../fn/account/get-all-users-post-plain';
import { getCurrentUserGet } from '../fn/account/get-current-user-get';
import { GetCurrentUserGet$Params } from '../fn/account/get-current-user-get';
import { getCurrentUserGet$Plain } from '../fn/account/get-current-user-get-plain';
import { GetCurrentUserGet$Plain$Params } from '../fn/account/get-current-user-get-plain';
import { getNotificationCredentialsGet } from '../fn/account/get-notification-credentials-get';
import { GetNotificationCredentialsGet$Params } from '../fn/account/get-notification-credentials-get';
import { getRolesGet } from '../fn/account/get-roles-get';
import { GetRolesGet$Params } from '../fn/account/get-roles-get';
import { getRolesGet$Plain } from '../fn/account/get-roles-get-plain';
import { GetRolesGet$Plain$Params } from '../fn/account/get-roles-get-plain';
import { GetRolesQueryResult } from '../models/get-roles-query-result';
import { getUserGet } from '../fn/account/get-user-get';
import { GetUserGet$Params } from '../fn/account/get-user-get';
import { getUserGet$Plain } from '../fn/account/get-user-get-plain';
import { GetUserGet$Plain$Params } from '../fn/account/get-user-get-plain';
import { getUserInfoGet } from '../fn/account/get-user-info-get';
import { GetUserInfoGet$Params } from '../fn/account/get-user-info-get';
import { getUserInfoGet$Plain } from '../fn/account/get-user-info-get-plain';
import { GetUserInfoGet$Plain$Params } from '../fn/account/get-user-info-get-plain';
import { GetUserInfoQueryResult } from '../models/get-user-info-query-result';
import { GetUserQueryResult } from '../models/get-user-query-result';
import { GetUsersQueryResult } from '../models/get-users-query-result';
import { lockUserPatch } from '../fn/account/lock-user-patch';
import { LockUserPatch$Params } from '../fn/account/lock-user-patch';
import { lockUserPatch$Plain } from '../fn/account/lock-user-patch-plain';
import { LockUserPatch$Plain$Params } from '../fn/account/lock-user-patch-plain';
import { LogoutCommandResult } from '../models/logout-command-result';
import { logoutGet } from '../fn/account/logout-get';
import { LogoutGet$Params } from '../fn/account/logout-get';
import { logoutGet$Plain } from '../fn/account/logout-get-plain';
import { LogoutGet$Plain$Params } from '../fn/account/logout-get-plain';
import { SetPasswordCommandResult } from '../models/set-password-command-result';
import { setUserPasswordPost } from '../fn/account/set-user-password-post';
import { SetUserPasswordPost$Params } from '../fn/account/set-user-password-post';
import { setUserPasswordPost$Plain } from '../fn/account/set-user-password-post-plain';
import { SetUserPasswordPost$Plain$Params } from '../fn/account/set-user-password-post-plain';
import { unLockUserPatch } from '../fn/account/un-lock-user-patch';
import { UnLockUserPatch$Params } from '../fn/account/un-lock-user-patch';
import { unLockUserPatch$Plain } from '../fn/account/un-lock-user-patch-plain';
import { UnLockUserPatch$Plain$Params } from '../fn/account/un-lock-user-patch-plain';
import { UpdateUserCommandResult } from '../models/update-user-command-result';
import { updateUserPatch } from '../fn/account/update-user-patch';
import { UpdateUserPatch$Params } from '../fn/account/update-user-patch';
import { updateUserPatch$Plain } from '../fn/account/update-user-patch-plain';
import { UpdateUserPatch$Plain$Params } from '../fn/account/update-user-patch-plain';
import { UserLockCommandResult } from '../models/user-lock-command-result';
import { UserUnlockCommandResult } from '../models/user-unlock-command-result';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllUsersPost()` */
  static readonly GetAllUsersPostPath = '/GetAllUsers';

  /**
   * Get All Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getAllUsersPost$Plain$Response(params?: GetAllUsersPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersQueryResult>> {
    return getAllUsersPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get All Users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getAllUsersPost$Plain(params?: GetAllUsersPost$Plain$Params, context?: HttpContext): Observable<GetUsersQueryResult> {
    return this.getAllUsersPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUsersQueryResult>): GetUsersQueryResult => r.body)
    );
  }

  /**
   * Get All Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsersPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getAllUsersPost$Response(params?: GetAllUsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUsersQueryResult>> {
    return getAllUsersPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Get All Users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsersPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  getAllUsersPost(params?: GetAllUsersPost$Params, context?: HttpContext): Observable<GetUsersQueryResult> {
    return this.getAllUsersPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUsersQueryResult>): GetUsersQueryResult => r.body)
    );
  }

  /** Path part for operation `getUserInfoGet()` */
  static readonly GetUserInfoGetPath = '/GetUserInfo';

  /**
   * Get User Info with specific Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserInfoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfoGet$Plain$Response(params: GetUserInfoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserInfoQueryResult>> {
    return getUserInfoGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User Info with specific Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserInfoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfoGet$Plain(params: GetUserInfoGet$Plain$Params, context?: HttpContext): Observable<GetUserInfoQueryResult> {
    return this.getUserInfoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserInfoQueryResult>): GetUserInfoQueryResult => r.body)
    );
  }

  /**
   * Get User Info with specific Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserInfoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfoGet$Response(params: GetUserInfoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserInfoQueryResult>> {
    return getUserInfoGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User Info with specific Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserInfoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserInfoGet(params: GetUserInfoGet$Params, context?: HttpContext): Observable<GetUserInfoQueryResult> {
    return this.getUserInfoGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserInfoQueryResult>): GetUserInfoQueryResult => r.body)
    );
  }

  /** Path part for operation `getUserGet()` */
  static readonly GetUserGetPath = '/GetUser';

  /**
   * Get User with specific Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGet$Plain$Response(params: GetUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserQueryResult>> {
    return getUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User with specific Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGet$Plain(params: GetUserGet$Plain$Params, context?: HttpContext): Observable<GetUserQueryResult> {
    return this.getUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserQueryResult>): GetUserQueryResult => r.body)
    );
  }

  /**
   * Get User with specific Id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGet$Response(params: GetUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserQueryResult>> {
    return getUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User with specific Id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGet(params: GetUserGet$Params, context?: HttpContext): Observable<GetUserQueryResult> {
    return this.getUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserQueryResult>): GetUserQueryResult => r.body)
    );
  }

  /** Path part for operation `getCurrentUserGet()` */
  static readonly GetCurrentUserGetPath = '/GetCurrentUser';

  /**
   * Get Current Logged-in User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserGet$Plain$Response(params?: GetCurrentUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserQueryResult>> {
    return getCurrentUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Current Logged-in User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserGet$Plain(params?: GetCurrentUserGet$Plain$Params, context?: HttpContext): Observable<GetUserQueryResult> {
    return this.getCurrentUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserQueryResult>): GetUserQueryResult => r.body)
    );
  }

  /**
   * Get Current Logged-in User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserGet$Response(params?: GetCurrentUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetUserQueryResult>> {
    return getCurrentUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Current Logged-in User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentUserGet(params?: GetCurrentUserGet$Params, context?: HttpContext): Observable<GetUserQueryResult> {
    return this.getCurrentUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetUserQueryResult>): GetUserQueryResult => r.body)
    );
  }

  /** Path part for operation `updateUserPatch()` */
  static readonly UpdateUserPatchPath = '/UpdateUser';

  /**
   * Update User Profile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPatch$Plain$Response(params?: UpdateUserPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserCommandResult>> {
    return updateUserPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update User Profile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPatch$Plain(params?: UpdateUserPatch$Plain$Params, context?: HttpContext): Observable<UpdateUserCommandResult> {
    return this.updateUserPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserCommandResult>): UpdateUserCommandResult => r.body)
    );
  }

  /**
   * Update User Profile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPatch$Response(params?: UpdateUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UpdateUserCommandResult>> {
    return updateUserPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Update User Profile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  updateUserPatch(params?: UpdateUserPatch$Params, context?: HttpContext): Observable<UpdateUserCommandResult> {
    return this.updateUserPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserCommandResult>): UpdateUserCommandResult => r.body)
    );
  }

  /** Path part for operation `lockUserPatch()` */
  static readonly LockUserPatchPath = '/LockUser';

  /**
   * Block user from using application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lockUserPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  lockUserPatch$Plain$Response(params?: LockUserPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserLockCommandResult>> {
    return lockUserPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Block user from using application.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lockUserPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  lockUserPatch$Plain(params?: LockUserPatch$Plain$Params, context?: HttpContext): Observable<UserLockCommandResult> {
    return this.lockUserPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserLockCommandResult>): UserLockCommandResult => r.body)
    );
  }

  /**
   * Block user from using application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lockUserPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  lockUserPatch$Response(params?: LockUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UserLockCommandResult>> {
    return lockUserPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Block user from using application.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lockUserPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  lockUserPatch(params?: LockUserPatch$Params, context?: HttpContext): Observable<UserLockCommandResult> {
    return this.lockUserPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserLockCommandResult>): UserLockCommandResult => r.body)
    );
  }

  /** Path part for operation `unLockUserPatch()` */
  static readonly UnLockUserPatchPath = '/UnLockUser';

  /**
   * Remove user block, and can use application normally.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unLockUserPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unLockUserPatch$Plain$Response(params?: UnLockUserPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserUnlockCommandResult>> {
    return unLockUserPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove user block, and can use application normally.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `unLockUserPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unLockUserPatch$Plain(params?: UnLockUserPatch$Plain$Params, context?: HttpContext): Observable<UserUnlockCommandResult> {
    return this.unLockUserPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserUnlockCommandResult>): UserUnlockCommandResult => r.body)
    );
  }

  /**
   * Remove user block, and can use application normally.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unLockUserPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unLockUserPatch$Response(params?: UnLockUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<UserUnlockCommandResult>> {
    return unLockUserPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove user block, and can use application normally.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `unLockUserPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  unLockUserPatch(params?: UnLockUserPatch$Params, context?: HttpContext): Observable<UserUnlockCommandResult> {
    return this.unLockUserPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserUnlockCommandResult>): UserUnlockCommandResult => r.body)
    );
  }

  /** Path part for operation `changeUserPasswordPost()` */
  static readonly ChangeUserPasswordPostPath = '/ChangeUserPassword';

  /**
   * Change user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeUserPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeUserPasswordPost$Plain$Response(params?: ChangeUserPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangePasswordCommandResult>> {
    return changeUserPasswordPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Change user password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeUserPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeUserPasswordPost$Plain(params?: ChangeUserPasswordPost$Plain$Params, context?: HttpContext): Observable<ChangePasswordCommandResult> {
    return this.changeUserPasswordPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangePasswordCommandResult>): ChangePasswordCommandResult => r.body)
    );
  }

  /**
   * Change user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeUserPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeUserPasswordPost$Response(params?: ChangeUserPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangePasswordCommandResult>> {
    return changeUserPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Change user password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeUserPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  changeUserPasswordPost(params?: ChangeUserPasswordPost$Params, context?: HttpContext): Observable<ChangePasswordCommandResult> {
    return this.changeUserPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangePasswordCommandResult>): ChangePasswordCommandResult => r.body)
    );
  }

  /** Path part for operation `setUserPasswordPost()` */
  static readonly SetUserPasswordPostPath = '/SetUserPassword';

  /**
   * Set user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setUserPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  setUserPasswordPost$Plain$Response(params?: SetUserPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SetPasswordCommandResult>> {
    return setUserPasswordPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Set user password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setUserPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  setUserPasswordPost$Plain(params?: SetUserPasswordPost$Plain$Params, context?: HttpContext): Observable<SetPasswordCommandResult> {
    return this.setUserPasswordPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SetPasswordCommandResult>): SetPasswordCommandResult => r.body)
    );
  }

  /**
   * Set user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setUserPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  setUserPasswordPost$Response(params?: SetUserPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<SetPasswordCommandResult>> {
    return setUserPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Set user password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setUserPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  setUserPasswordPost(params?: SetUserPasswordPost$Params, context?: HttpContext): Observable<SetPasswordCommandResult> {
    return this.setUserPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<SetPasswordCommandResult>): SetPasswordCommandResult => r.body)
    );
  }

  /** Path part for operation `getRolesGet()` */
  static readonly GetRolesGetPath = '/GetRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesGet$Plain$Response(params?: GetRolesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetRolesQueryResult>> {
    return getRolesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesGet$Plain(params?: GetRolesGet$Plain$Params, context?: HttpContext): Observable<GetRolesQueryResult> {
    return this.getRolesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetRolesQueryResult>): GetRolesQueryResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesGet$Response(params?: GetRolesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<GetRolesQueryResult>> {
    return getRolesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesGet(params?: GetRolesGet$Params, context?: HttpContext): Observable<GetRolesQueryResult> {
    return this.getRolesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetRolesQueryResult>): GetRolesQueryResult => r.body)
    );
  }

  /** Path part for operation `logoutGet()` */
  static readonly LogoutGetPath = '/Logout';

  /**
   * Log user out and end session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutGet$Plain$Response(params?: LogoutGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LogoutCommandResult>> {
    return logoutGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Log user out and end session.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logoutGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutGet$Plain(params?: LogoutGet$Plain$Params, context?: HttpContext): Observable<LogoutCommandResult> {
    return this.logoutGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<LogoutCommandResult>): LogoutCommandResult => r.body)
    );
  }

  /**
   * Log user out and end session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutGet$Response(params?: LogoutGet$Params, context?: HttpContext): Observable<StrictHttpResponse<LogoutCommandResult>> {
    return logoutGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Log user out and end session.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logoutGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutGet(params?: LogoutGet$Params, context?: HttpContext): Observable<LogoutCommandResult> {
    return this.logoutGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<LogoutCommandResult>): LogoutCommandResult => r.body)
    );
  }

  /** Path part for operation `deleteUserDelete()` */
  static readonly DeleteUserDeletePath = '/DeleteUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteUserDelete$Plain$Response(params?: DeleteUserDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteUserCommandResult>> {
    return deleteUserDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteUserDelete$Plain(params?: DeleteUserDelete$Plain$Params, context?: HttpContext): Observable<DeleteUserCommandResult> {
    return this.deleteUserDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteUserCommandResult>): DeleteUserCommandResult => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteUserDelete$Response(params?: DeleteUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<DeleteUserCommandResult>> {
    return deleteUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteUserDelete(params?: DeleteUserDelete$Params, context?: HttpContext): Observable<DeleteUserCommandResult> {
    return this.deleteUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteUserCommandResult>): DeleteUserCommandResult => r.body)
    );
  }

  /** Path part for operation `getNotificationCredentialsGet()` */
  static readonly GetNotificationCredentialsGetPath = '/GetNotificationCredentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationCredentialsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationCredentialsGet$Response(params?: GetNotificationCredentialsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getNotificationCredentialsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNotificationCredentialsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationCredentialsGet(params?: GetNotificationCredentialsGet$Params, context?: HttpContext): Observable<void> {
    return this.getNotificationCredentialsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
