import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { AccountService } from 'src/app/core/backend/common/services';
import { Subscription } from 'rxjs';
import { SWAL } from 'src/app/app-const';

@Component({
  selector: 'change-password'!,
  standalone: true,
  imports: [CommonModule , ZorroModule , ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnDestroy {
  #destroy = new Subscription();

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.form.controls.confirmPassword.updateValueAndValidity());
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
  readonly #location = inject(Location);
  readonly #fb = inject(FormBuilder);
  readonly #account = inject(AccountService);
  form = this.#fb.group({
    currentPassword: new FormControl<string | null>(null, Validators.required),
    newPassword: new FormControl<string | null>(null, Validators.required),
    confirmPassword: new FormControl<string | null>(null, [Validators.required, this.confirmationValidator]),
  });
  goBack() {
    this.#location.back();
  }

  changePassword() {
    this.#account.changeUserPasswordPost(
      {
        body: {
          currentPassword: this.form.value.currentPassword || '',
          newPassword: this.form.value.newPassword || ''
        }
      }
    ).subscribe(
      {
         next: () => {
          SWAL('success', 'تم تغيير  كلمة المرور بنجاح', '');
          this.form.reset();

        },
        error: (error) => {
          SWAL('error', error?.errorCode, error?.message || '');
        },
      }

    )
  }

  onSubmit(){
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      SWAL('warning', 'يجب تعبئة جميع الحقول');
      return;
    } else
      {
      this.changePassword();
    }
  }
}
