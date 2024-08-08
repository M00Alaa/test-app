/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';

@Component({
  selector: 'mg-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NgbDropdownModule],
})
export class AccountDropdownComponent {
  @Input() light: boolean;

  acc: MgApplicationUser | null = null;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
    this.authService.identity().subscribe((acc) => {
      this.acc = acc;
    });
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }
}
