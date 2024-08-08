import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-acctype-button',
  templateUrl: './acctype-button.component.html',
  styleUrls: ['./acctype-button.component.scss']
})
export class AcctypeButtonComponent {
  constructor(
    private router: Router
  ) {

  }

  goToSignUp(type: 'CO_CONST' | 'CO_CONSULT' | 'EMPLOY_MANAGEMENT' | 'EMPLOY_AGENCY') {
    this.router.navigate(['/account/signup', type]);
  }
}
