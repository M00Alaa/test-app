/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROLES, SWAL } from 'src/app/app-const';
import { IdentityRole, UserInfo } from 'src/app/core/backend/common/models';
import {
  AccountService,
  AuthenticationService,
} from 'src/app/core/backend/common/services';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit, OnDestroy {
  #destroy = new Subscription();
  gettingOrgs = false;
  gettingData = false;
  itemDetails: UserInfo | undefined;
  submitting = false;
  roles = ROLES;
  rolesList: IdentityRole[] = [];

  readonly #router = inject(Router);
  readonly #fb = inject(FormBuilder);
  readonly #location = inject(Location);
  readonly #route = inject(ActivatedRoute);
  readonly #accountService = inject(AccountService);
  readonly #authService = inject(AuthenticationService);

  form: FormGroup = this.initForm();

  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
  ngOnInit(): void {
    this.getRouting();
    this.getRoles();
  }

  getRouting() {
    this.#route.params.subscribe((res) => {
      if (res['id']) {
        this.getDataForEdit(res['id']);
      }
    });
  }

  goBack() {
    this.#location.back();
  }

  initForm(): FormGroup {
    return this.#fb.group({
      name: new FormControl<string | undefined>(undefined, [
        Validators.required,
      ]),
      password: new FormControl<string | undefined>(undefined, [
        Validators.required,
      ]),
      email: new FormControl<string | null>(null, [Validators.required]),
      phoneNumber: new FormControl<string | null>(null, [Validators.required]),
      roles: new FormControl<IdentityRole | null>(null, [Validators.required]),
    });
  }

  getRoles() {
    this.#accountService
      .getRolesGet({
        UserId: this.itemDetails?.id ?? undefined,
      })
      .subscribe({
        next: (res) => {
          this.rolesList = res.roles as IdentityRole[];
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getDataForEdit(id: string) {

    if (id) {
      this.gettingData = true;
      this.#accountService
        .getUserInfoGet({
          Id: id,
        })
        .subscribe({
          next: (res) => {
            const userItems = res.userInfo ?? [];
            this.itemDetails = userItems as UserInfo;
            console.log('user roles' , this.itemDetails);
            this.form.patchValue({
              Id: this.itemDetails.id,
              name: this.itemDetails.name,
              email: this.itemDetails.email,
              phoneNumber: this.itemDetails.phoneNumber,
              roles: this.itemDetails.roles,
            });

            this.gettingData = false;
          },
          error: (err) => {
            SWAL('error', err?.errorCode);
            this.gettingData = false;
            this.#router.navigate(['/system-elites/users']);
          },
        });
    }
  }

  updateForm() {
    const formValue = this.form.getRawValue();
    const roles = Array.isArray(formValue.roles)
    ? formValue.roles
    : [formValue.roles];
    this.#destroy.add(
      this.#accountService
        .updateUserPatch({
          body: {
            id: this.itemDetails?.id ?? '',
            name: formValue.name,
            email: formValue.email,
            phoneNumber: formValue.phoneNumber,
            roles: roles,
          },
        })
        .subscribe(
          () => {
            SWAL('success', 'تم تعديل  المستخدم بنجاح');
            this._navigateAfterSave();
          },
          (error) => {
            SWAL('error', error?.errorCode, error?.message || '');
          },
        ),
    );
  }

  addForm() {
    const formValue = this.form.getRawValue();
    const roles = Array.isArray(formValue.roles)
      ? formValue.roles
      : [formValue.roles];
    console.log('roles', roles);
    this.#destroy.add(
      this.#authService
        .createUserPost({
          body: {
            name: formValue.name,
            password: formValue.password,
            email: formValue.email,
            phoneNumber: formValue.phoneNumber,
            roles: roles,
          },
        })
        .subscribe(
          () => {
            SWAL('success', 'تم اضافة المستخدم بنجاح');
            this.#router.navigate(['../'], {
              relativeTo: this.#route,
            });
          },
          (error) => {
            SWAL('error', error?.errorCode, error?.message || '');
          },
        ),
    );
  }

  onSubmit() {
    console.log(this.form.get('roles')?.value);
    if (this.itemDetails?.id) {
      this.form.get('password')?.clearValidators();
      this.form.get('password')?.updateValueAndValidity();
    } else {
      this.form
        .get('password')
        ?.setValidators([Validators.required /* other validators */]);
      this.form.get('password')?.updateValueAndValidity();
    }

    if (this.form.valid) {
      if (this.itemDetails?.id) {
        this.updateForm();
      } else {
        this.addForm();
      }
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      SWAL('error', 'برجاء ملأ جميع البيانات');
    }
  }
  _navigateAfterSave() {
    this.#router.navigate(['../../'], {
      relativeTo: this.#route,
    });
  }
}
