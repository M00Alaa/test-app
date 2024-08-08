/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROLES } from 'src/app/app-const';
import { SpinnerService } from '../services/spinner.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  /**
   * Constructor
   */
  constructor(
    private _authService: AuthenticationService,
    private _router: Router,
    private loaderService: SpinnerService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Can activate
   *
   * @param route
   * @param state
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = state.url;
    const authorities = route.data.authorities;
    const roles = route.data.roles;
    return this._check(redirectUrl, authorities, roles);
  }

  /**
   * Can activate child
   *
   * @param childRoute
   * @param state
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const redirectUrl = state.url;
    return this._check(redirectUrl);
  }

  /**
   * Can load
   *
   * @param route
   * @param segments
   */
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._check('/');
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Check the authenticated status
   *
   * @param redirectURL
   * @private
   */
  private _check(
    redirectURL: string,
    authorities?: string[],
    roles?: string[],
  ): Observable<boolean> {
    this.loaderService.showSpinner();
    // Check the authentication status
    return this._authService.identity().pipe(
      map((user) => {
        this.loaderService.hideSpinner();
        // If the user is not user...
        if (!user) {
          // Redirect to the sign-in page
          this._router.navigate(['/account/login'], {
            queryParams: { redirectURL },
          });
          // Prevent the access
          return false;
        }

        if (roles) {
          const userRoles = user?.roles || [];
          let allowed = false;
          if (
            !roles ||
            roles.length === 0 ||
            !!roles.find((r) => userRoles?.includes(r)) ||
            userRoles?.includes(ROLES.Admin)
          ) {
            allowed = true;
          }

          if (!allowed) {
            this._router.navigate(['/403']);
            return false;
          }
        }

        // Allow the access
        return true;
      }),
      catchError(() => {
        // Handle the error here, and redirect to login page
        this.loaderService.hideSpinner();
        this._router.navigate(['/account/login'], {
          queryParams: { redirectURL },
        });
        // Prevent the access
        // Returning of(false) to continue propagating the error
        return of(false);
      }),
    );
  }
}
