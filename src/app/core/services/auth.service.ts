/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ApplicationUser } from '../backend/common/models';
import {
  AccountService,
  AuthenticationService as AuthenticationServiceBE,
} from '../backend/common/services';

export interface MgApplicationUser extends ApplicationUser {
  roles?: string[] | null;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  currentUserSubject: BehaviorSubject<MgApplicationUser | null> =
    new BehaviorSubject<MgApplicationUser | null>(null);
  public currentUser: Observable<MgApplicationUser | null>;

  private token;
  public get _token(): string {
    return (
      this.token ||
      JSON.parse(localStorage.getItem('userToken') || 'null') ||
      JSON.parse(sessionStorage.getItem('userToken') || 'null')
    );
  }
  private set _tokenInLocal(value: string | null) {
    this.token = value;
    localStorage.setItem('userToken', JSON.stringify(value));
  }
  private set _tokenInSession(value: string | null) {
    this.token = value;
    sessionStorage.setItem('userToken', JSON.stringify(value));
  }

  userData = null;
  constructor(
    private router: Router,
    private userService: AccountService,
    private beAuthService: AuthenticationServiceBE,
  ) {
    this.currentUser = this.currentUserSubject.asObservable();
  }

  identity(force = false): Observable<MgApplicationUser | null> {
    if (!this._token) {
      return of(null);
    }

    if (this.currentUserSubject.value && !force) {
      return this.currentUserSubject;
    } else {
      return this.userService.getCurrentUserGet().pipe(
        distinctUntilChanged(),
        map((res) => {
          // login successful if there's a jwt token in the response
          if (res) {
            if (!this.currentUserSubject.value || force) {
              this.currentUserSubject.next(
                res.user ? { ...res.user, roles: res.roles } : null,
              );
            }

            return (this.currentUserSubject.getValue() ||
              res.user ||
              null) as any;
          }
          this.router.navigate(['/account']);
          return null;
        }),
      );
    }
  }

  public get currentUserValue(): ApplicationUser | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string, rememberMe = true) {
    return this.beAuthService
      .loginPost({
        body: {
          userName: username,
          password,
        },
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          if (user && user?.token) {
            this.identity(true).subscribe();
            if (rememberMe) {
              this._tokenInLocal = user.token;
            } else {
              this._tokenInSession = user.token;
            }
          }
          return user;
        }),
      );
  }

  redirectUser() {
    // const userRoles = this.currentUserSubject.getValue()?.roles;
    // if (
    //   userRoles?.includes(ROLES.Admin) &&
    //   isProfessionWakeel(this.currentUserSubject.getValue().roles)
    // ) {
    //   this.router.navigate(['/pmo']);
    // } else if (userRoles?.includes(ROLES.CanUseProjectManager)) {
    //   this.router.navigate(['/pmo/projects']);
    // } else {
    //   this.router.navigate(['/pmo']);
    // }
  }

  logout() {
    this._tokenInLocal = null;
    this._tokenInSession = null;
    this.currentUserSubject.next(null);
    // this.router.navigate(['/account/login'])
    location.href = '/account/login';
  }
}
