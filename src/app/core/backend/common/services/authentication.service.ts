/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ConfirmEmailCommandResult } from '../models/confirm-email-command-result';
import { confirmEmailGet } from '../fn/authentication/confirm-email-get';
import { ConfirmEmailGet$Params } from '../fn/authentication/confirm-email-get';
import { confirmEmailGet$Plain } from '../fn/authentication/confirm-email-get-plain';
import { ConfirmEmailGet$Plain$Params } from '../fn/authentication/confirm-email-get-plain';
import { confirmForgotPasswordPost } from '../fn/authentication/confirm-forgot-password-post';
import { ConfirmForgotPasswordPost$Params } from '../fn/authentication/confirm-forgot-password-post';
import { confirmForgotPasswordPost$Plain } from '../fn/authentication/confirm-forgot-password-post-plain';
import { ConfirmForgotPasswordPost$Plain$Params } from '../fn/authentication/confirm-forgot-password-post-plain';
import { createUserPost } from '../fn/authentication/create-user-post';
import { CreateUserPost$Params } from '../fn/authentication/create-user-post';
import { createUserPost$Plain } from '../fn/authentication/create-user-post-plain';
import { CreateUserPost$Plain$Params } from '../fn/authentication/create-user-post-plain';
import { ForgotPasswordCommandResult } from '../models/forgot-password-command-result';
import { ForgotPasswordConfirmationCommandResult } from '../models/forgot-password-confirmation-command-result';
import { forgotPasswordGet } from '../fn/authentication/forgot-password-get';
import { ForgotPasswordGet$Params } from '../fn/authentication/forgot-password-get';
import { forgotPasswordGet$Plain } from '../fn/authentication/forgot-password-get-plain';
import { ForgotPasswordGet$Plain$Params } from '../fn/authentication/forgot-password-get-plain';
import { LoginCommandResult } from '../models/login-command-result';
import { loginPost } from '../fn/authentication/login-post';
import { LoginPost$Params } from '../fn/authentication/login-post';
import { loginPost$Plain } from '../fn/authentication/login-post-plain';
import { LoginPost$Plain$Params } from '../fn/authentication/login-post-plain';
import { RegisterCommandResult } from '../models/register-command-result';
import { resendConfirmEmailGet } from '../fn/authentication/resend-confirm-email-get';
import { ResendConfirmEmailGet$Params } from '../fn/authentication/resend-confirm-email-get';
import { resendConfirmEmailGet$Plain } from '../fn/authentication/resend-confirm-email-get-plain';
import { ResendConfirmEmailGet$Plain$Params } from '../fn/authentication/resend-confirm-email-get-plain';
import { SendConfirmEmailCommandResult } from '../models/send-confirm-email-command-result';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `loginPost()` */
  static readonly LoginPostPath = '/Login';

  /**
   * Sign-in User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain$Response(params?: LoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginCommandResult>> {
    return loginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign-in User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain(params?: LoginPost$Plain$Params, context?: HttpContext): Observable<LoginCommandResult> {
    return this.loginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginCommandResult>): LoginCommandResult => r.body)
    );
  }

  /**
   * Sign-in User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Response(params?: LoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<LoginCommandResult>> {
    return loginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign-in User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost(params?: LoginPost$Params, context?: HttpContext): Observable<LoginCommandResult> {
    return this.loginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginCommandResult>): LoginCommandResult => r.body)
    );
  }

  /** Path part for operation `confirmEmailGet()` */
  static readonly ConfirmEmailGetPath = '/ConfirmEmail';

  /**
   * Confirm User Email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmEmailGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmailGet$Plain$Response(params: ConfirmEmailGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmEmailCommandResult>> {
    return confirmEmailGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm User Email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmEmailGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmailGet$Plain(params: ConfirmEmailGet$Plain$Params, context?: HttpContext): Observable<ConfirmEmailCommandResult> {
    return this.confirmEmailGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConfirmEmailCommandResult>): ConfirmEmailCommandResult => r.body)
    );
  }

  /**
   * Confirm User Email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmEmailGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmailGet$Response(params: ConfirmEmailGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmEmailCommandResult>> {
    return confirmEmailGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm User Email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmEmailGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmEmailGet(params: ConfirmEmailGet$Params, context?: HttpContext): Observable<ConfirmEmailCommandResult> {
    return this.confirmEmailGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConfirmEmailCommandResult>): ConfirmEmailCommandResult => r.body)
    );
  }

  /** Path part for operation `confirmForgotPasswordPost()` */
  static readonly ConfirmForgotPasswordPostPath = '/ConfirmForgotPassword';

  /**
   * Confirm user forgot password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmForgotPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  confirmForgotPasswordPost$Plain$Response(params?: ConfirmForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordConfirmationCommandResult>> {
    return confirmForgotPasswordPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm user forgot password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmForgotPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  confirmForgotPasswordPost$Plain(params?: ConfirmForgotPasswordPost$Plain$Params, context?: HttpContext): Observable<ForgotPasswordConfirmationCommandResult> {
    return this.confirmForgotPasswordPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForgotPasswordConfirmationCommandResult>): ForgotPasswordConfirmationCommandResult => r.body)
    );
  }

  /**
   * Confirm user forgot password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmForgotPasswordPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  confirmForgotPasswordPost$Response(params?: ConfirmForgotPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordConfirmationCommandResult>> {
    return confirmForgotPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm user forgot password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmForgotPasswordPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  confirmForgotPasswordPost(params?: ConfirmForgotPasswordPost$Params, context?: HttpContext): Observable<ForgotPasswordConfirmationCommandResult> {
    return this.confirmForgotPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForgotPasswordConfirmationCommandResult>): ForgotPasswordConfirmationCommandResult => r.body)
    );
  }

  /** Path part for operation `forgotPasswordGet()` */
  static readonly ForgotPasswordGetPath = '/ForgotPassword';

  /**
   * Send confirm code to user email, using for confirm user password when change it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPasswordGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordGet$Plain$Response(params: ForgotPasswordGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordCommandResult>> {
    return forgotPasswordGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Send confirm code to user email, using for confirm user password when change it.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgotPasswordGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordGet$Plain(params: ForgotPasswordGet$Plain$Params, context?: HttpContext): Observable<ForgotPasswordCommandResult> {
    return this.forgotPasswordGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForgotPasswordCommandResult>): ForgotPasswordCommandResult => r.body)
    );
  }

  /**
   * Send confirm code to user email, using for confirm user password when change it.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPasswordGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordGet$Response(params: ForgotPasswordGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ForgotPasswordCommandResult>> {
    return forgotPasswordGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Send confirm code to user email, using for confirm user password when change it.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgotPasswordGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordGet(params: ForgotPasswordGet$Params, context?: HttpContext): Observable<ForgotPasswordCommandResult> {
    return this.forgotPasswordGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ForgotPasswordCommandResult>): ForgotPasswordCommandResult => r.body)
    );
  }

  /** Path part for operation `resendConfirmEmailGet()` */
  static readonly ResendConfirmEmailGetPath = '/ResendConfirmEmail';

  /**
   * Resend email for confirm user email again.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendConfirmEmailGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmEmailGet$Plain$Response(params: ResendConfirmEmailGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SendConfirmEmailCommandResult>> {
    return resendConfirmEmailGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Resend email for confirm user email again.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resendConfirmEmailGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmEmailGet$Plain(params: ResendConfirmEmailGet$Plain$Params, context?: HttpContext): Observable<SendConfirmEmailCommandResult> {
    return this.resendConfirmEmailGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SendConfirmEmailCommandResult>): SendConfirmEmailCommandResult => r.body)
    );
  }

  /**
   * Resend email for confirm user email again.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendConfirmEmailGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmEmailGet$Response(params: ResendConfirmEmailGet$Params, context?: HttpContext): Observable<StrictHttpResponse<SendConfirmEmailCommandResult>> {
    return resendConfirmEmailGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Resend email for confirm user email again.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resendConfirmEmailGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmEmailGet(params: ResendConfirmEmailGet$Params, context?: HttpContext): Observable<SendConfirmEmailCommandResult> {
    return this.resendConfirmEmailGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<SendConfirmEmailCommandResult>): SendConfirmEmailCommandResult => r.body)
    );
  }

  /** Path part for operation `createUserPost()` */
  static readonly CreateUserPostPath = '/CreateUser';

  /**
   * Create new user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createUserPost$Plain$Response(params?: CreateUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterCommandResult>> {
    return createUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Create new user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createUserPost$Plain(params?: CreateUserPost$Plain$Params, context?: HttpContext): Observable<RegisterCommandResult> {
    return this.createUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterCommandResult>): RegisterCommandResult => r.body)
    );
  }

  /**
   * Create new user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createUserPost$Response(params?: CreateUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<RegisterCommandResult>> {
    return createUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create new user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createUserPost(params?: CreateUserPost$Params, context?: HttpContext): Observable<RegisterCommandResult> {
    return this.createUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegisterCommandResult>): RegisterCommandResult => r.body)
    );
  }

}
