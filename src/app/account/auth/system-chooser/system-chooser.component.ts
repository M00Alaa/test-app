/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLES, SWAL, logo } from 'src/app/app-const';
import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

interface ISystem {
  name: string;
  logo: string;
  link: string;
  roles?: string[];
}
@Component({
  selector: 'mg-system-chooser',
  templateUrl: './system-chooser.component.html',
  styleUrls: ['./system-chooser.component.scss'],
})
export class SystemChooserComponent {
  acc: MgApplicationUser | null = null;
  logos = logo;

  systems: ISystem[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: SpinnerService,
    private authenticationService: AuthenticationService,
  ) {
    spinner.showSpinner();
    authenticationService.identity().subscribe({
      next: (res) => {
        this.acc = res;
        this.setSystems();
        setTimeout(() => {
          spinner.hideSpinner();
        }, 100);
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

  setSystems() {
    this.systems = [
      {
        name: '  نظام إدارة المهام',
        link: '/task-manager',
        logo: '/assets/images/login-screen/tm-icon.svg',
        roles: [ROLES['CanUseTaskManager'], ROLES.Admin],
      },
      {
        name: ' نظام إدارة المشاريع',
        link: this.acc?.roles?.some(
          (r) => r === ROLES.Admin || r === '1' || r === '2',
        )
          ? '/pmo'
          : '/pmo/projects?type=Contracted',
        logo: '/assets/images/login-screen/pm-icon.svg',
        roles: [ROLES['CanUseProjectManager'], ROLES.Admin],
      },

      // {
      //   name: 'نظام قياس الآداء',
      //   link: '',
      //   logo: '/assets/images/login-screen/PP-icon.svg'
      // },
      {
        name: 'إعدادات النظام ',
        link: '/system-setting',
        logo: '/assets/images/login-screen/setting.svg',
        roles: [ROLES['Admin']],
      },
    ];
  }
  logout() {
    this.authenticationService.logout();
  }
}
