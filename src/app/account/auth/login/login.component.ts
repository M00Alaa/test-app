import { Component, OnDestroy, OnInit, isDevMode } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SWAL, logo, projectName } from 'src/app/app-const';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

/**
 * Login component
 */
export class LoginComponent implements OnInit, OnDestroy {
  logos = logo;
  projectName = projectName.en;
  loginForm = new FormGroup({
    userName: new FormControl(isDevMode() ? 'Admin' : '', [
      Validators.required,
    ]),
    password: new FormControl(isDevMode() ? '123456' : '', [
      Validators.required,
    ]),
  });

  returnUrl = '';

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: SpinnerService,
    private authenticationService: AuthenticationService,
  ) {
    spinner.showSpinner();
    authenticationService.identity(true).subscribe({
      next: (res) => {
        if (res) {
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            router.navigate(['/system-elites/home']);
          }
        }
        setTimeout(() => {
          spinner.hideSpinner();
        }, 1000);
      },
      error: (error) => {
        spinner.hideSpinner();
        if (error?.isLockout) {
          SWAL('error', 'LOCKED');
        } else {
          SWAL('error', error?.errorCode);
        }
      },
    });
  }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.route.queryParams.subscribe((params) => {
      if (params['returnUrl'] || params['redirectURL']) {
        this.returnUrl = params['returnUrl'] || params['redirectURL'];
      }
    });
  }

  subs = new Subscription();
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  loading = false;
  /**
   * Form submit
   */
  onSubmit() {
    if (this.loginForm.valid) {
      if (this.f.userName.value && this.f.password.value) {
        this.loading = true;
        this.subs.add(
          this.authenticationService
            .login(this.f.userName.value, this.f.password.value, true)
            .subscribe({
              next: () => {
                this.loading = false;
                this.subs.add(
                  this.authenticationService.identity(true).subscribe({
                    next: (res) => {
                      if (res) {
                        if (this.returnUrl) {
                          this.router.navigateByUrl(this.returnUrl);
                        } else {
                          this.router.navigate(['/system-elites/home']);
                        }
                      }
                    },
                  }),
                );
              },
              error: (error) => {
                this.loading = false;
                SWAL('error', error?.errorCode);
              },
            }),
        );
      }
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
