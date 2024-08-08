/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { logo, projectName, userNamePattern } from 'src/app/app-const';
import { AuthenticationService } from 'src/app/core/backend/common/services';
// import { Company, CompanyType } from 'src/app/core/backend/pm/models';
const fullForm = {
  userName: new FormControl<string>('', [
    Validators.required,
    Validators.pattern(userNamePattern),
  ]),
  phoneNumber: new FormControl<string>('', Validators.required),
  email: new FormControl<string>('', [Validators.required, Validators.email]),
  password: new FormControl<string>('', [
    Validators.required,
    Validators.minLength(6),
  ]),
  confirmPassword: new FormControl<string>('', [Validators.required]),
  address: new FormControl<string>(''),
  // ?? For employee
  job: new FormControl<string | undefined>(undefined, Validators.required),
  fullName: new FormControl<string>('', Validators.required),
  // ?? employee agency and management
  agencyType: new FormControl<'MAIN' | 'SUB'>('MAIN', Validators.required),
  mainAgency: new FormControl<string | undefined>(
    undefined,
    Validators.required,
  ),
  subAgency: new FormControl<string | undefined>(
    undefined,
    Validators.required,
  ),
  branch: new FormControl<string | undefined>(undefined, Validators.required),
  // ?? Employee management
  managementType: new FormControl<'MAIN' | 'SUB'>('MAIN', Validators.required),
  mainManagement: new FormControl<string | undefined>(
    undefined,
    Validators.required,
  ),
  subManagement: new FormControl<string | undefined>(
    undefined,
    Validators.required,
  ),
  // ??
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  logos = logo;
  projectName = projectName.en;
  registrationForm = new FormGroup({ ...fullForm });
  companyForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(userNamePattern),
    ]),
    managerId: new FormControl<string>('', Validators.required),
    organizationId: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.email,
    ]),
    phoneNumber: new FormControl<string>('', Validators.required),
    address: new FormControl<string>(''),
    // ?? Company
    companyId: new FormControl<string>('', Validators.required),
    commercialRecord: new FormControl<string>('', Validators.required),
  });
  submitted = false;
  error = '';
  successmsg = false;
  year: number = new Date().getFullYear();

  regType: 'CO_CONST' | 'CO_CONSULT' | 'EMPLOY_MANAGEMENT' | 'EMPLOY_AGENCY';
  // tslint:disable-next-line: max-line-length
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private authenticationService: AuthenticationService,
  ) {
    route.params.subscribe({
      next: (res) => {
        if (res['type']) {
          this.setFormControls(res['type']);
        }
      },
    });
  }

  setFormControls(
    type: 'CO_CONST' | 'CO_CONSULT' | 'EMPLOY_MANAGEMENT' | 'EMPLOY_AGENCY',
  ) {
    this.regType = type;
    this.registrationForm = new FormGroup({ ...fullForm });
    if (this.regType === 'EMPLOY_AGENCY') {
      (this.registrationForm as FormGroup<any>)?.removeControl(
        'commercialRecord',
      );
      (this.registrationForm as FormGroup<any>)?.removeControl('companyId');
      (this.registrationForm as FormGroup<any>)?.removeControl(
        'managementType',
      );
      (this.registrationForm as FormGroup<any>)?.removeControl(
        'mainManagement',
      );
      (this.registrationForm as FormGroup<any>)?.removeControl('subManagement');
    } else if (this.regType === 'EMPLOY_MANAGEMENT') {
      (this.registrationForm as FormGroup<any>)?.removeControl('agencyType');
      (this.registrationForm as FormGroup<any>)?.removeControl('companyId');
      (this.registrationForm as FormGroup<any>)?.removeControl(
        'commercialRecord',
      );
    } else {
      this.destroyPage();
    }
  }

  destroyPage() {
    this.router.navigate(['/account', 'select-role']);
  }

  ngOnInit() {}

  /**
   * On submit form
   */
  loading = false;
  onSubmit() {
    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    } else {
      this.loading = true;
    }
  }

  private _onSuccess() {
    this.router.navigate(['/account/success-register']);
  }
  // ?? Helpers
  // companies: Company[] = [];
  gettingCompanies = false;
  // getCompanies() {
  //   this.gettingCompanies = true;
  //   if (this.regType === 'CO_CONST') {
  //     setTimeout(() => {
  //       this.gettingCompanies = false;
  //       this.companies = [
  //         {
  //           id: Math.random().toString(),
  //           address: '123 Main Street',
  //           companyType: CompanyType.Construction, // Replace with the actual CompanyType value
  //           crn: 'CRN123',
  //           name: 'شركة 1',
  //           phoneNumber: '0109655656',
  //         },
  //       ];
  //     }, 1000);
  //   }
  //   if (this.regType === 'CO_CONSULT') {
  //     setTimeout(() => {
  //       this.gettingCompanies = false;
  //       this.companies = [];
  //     }, 1000);
  //   }
  // }
}
