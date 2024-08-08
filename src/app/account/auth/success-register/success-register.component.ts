import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { logo } from 'src/app/app-const';

@Component({
  selector: 'mg-success-register',
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss']
})
export class SuccessRegisterComponent {
  logos = logo;
  options: AnimationOptions = {
    path: '/assets/lottie/SUCSESS.json',

  };
}
