/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SWAL } from 'src/app/app-const';
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private translate: TranslateService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          return EMPTY;
        }

        const error = err?.error?.error || err?.error;
        if (error?.isLockout) {
          return throwError(() => ({ errorCode: 'LOCKED' }));
        }
        if (error.errors && !error?.errorCode) {
          let errors: { field: string; code: string }[] = Object.entries(
            error.errors,
          ).map((e: any) => ({
            field: e[0],
            code: e[1][0],
          }));
          SWAL('error', errors[0]?.code, '');
          return throwError(() => ({ errorCode: 'NO-ERROR' }));
        }

        return throwError(() => error);
      }),
    );
  }
}
