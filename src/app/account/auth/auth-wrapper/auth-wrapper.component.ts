/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mg-auth-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
})
export class AuthWrapperComponent {
  bgs = {
    light: '/assets/images/bg-src-3000.png',
    dark: '/assets/images/bg-src-3000.png',
  };

  currentBG = this.bgs.dark;

  constructor() {
    if (new Date().getHours() > 17) {
      this.currentBG = this.bgs.dark;
    } else {
      this.currentBG = this.bgs.light;
    }
  }
}
