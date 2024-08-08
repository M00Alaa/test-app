/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    try {
      const token = JSON.parse(
        localStorage.getItem('userToken') ||
          sessionStorage.getItem('userToken') ||
          'null',
      );
      if (token || this.auth._token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token || this.auth._token}`,
          },
        });
      }
    } catch (e) {
      localStorage.removeItem('userToken');
      sessionStorage.removeItem('userToken');
    }

    request = request.clone({
      setHeaders: { 'Access-Control-Expose-Headers': 'Content-Disposition' },
    });

    if (
      request.url.toLowerCase().endsWith('.jpg') ||
      request.url.toLowerCase().endsWith('.jpeg') ||
      request.url.toLowerCase().endsWith('.png') ||
      request.url.toLowerCase().endsWith('.gif')
    ) {
      const cacheTtl = 3600 * 24; // day cache TTL
      const cacheControlHeader = `max-age=${cacheTtl}`;
      const modifiedReq = request.clone({
        setHeaders: { 'Cache-Control': cacheControlHeader },
      });
      return next.handle(modifiedReq);
    }

    return next.handle(request);
  }
}
