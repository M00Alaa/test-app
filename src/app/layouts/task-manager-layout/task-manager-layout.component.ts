/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs';
import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';

@Component({
  selector: 'mg-task-manager-layout',
  templateUrl: './task-manager-layout.component.html',
  styleUrls: ['./task-manager-layout.component.scss'],
})
export class TaskManagerLayoutComponent implements AfterViewInit {
  showWelcome = false;
  Breadcrumb = '';
  now = new Date();
  isNavCollapsed = false;
  acc: MgApplicationUser | null = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthenticationService,
    public translate: TranslateService,
  ) {
    auth.currentUserSubject.subscribe({
      next: (res) => {
        this.acc = res;
      },
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          if (child?.snapshot.data.showWelcome) {
            this.showWelcome = true;
          } else {
            this.showWelcome = false;
          }
          if (child?.snapshot.data.breadcrumb) {
            return child.snapshot.data.breadcrumb;
          }
          return null;
        }),
      )
      .subscribe((ttl: any) => {
        this.Breadcrumb = ttl;
      });
  }

  ngAfterViewInit(): void {
    this.activateMenu();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.activateMenu();
      }
    });
  }
  activateMenu() {
    setTimeout(() => {
      const elmnts = document.querySelectorAll(
        '.navbar-collapse .navbar-nav .nav-item.dropdown',
      );
      elmnts.forEach((elmnt) => {
        elmnt.classList.remove('active');
      });
      elmnts.forEach((elmnt) => {
        if (elmnt.querySelector('li.active')) {
          elmnt.classList.add('active');
        }
      });
    }, 100);
  }
  /**
   * Logout the user
   */
  logout() {
    this.auth.logout();
    this.router.navigate(['/account/login']);
  }
}
