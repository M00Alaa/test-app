import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mg-page403',
  templateUrl: './page403.component.html',
  styleUrls: ['./page403.component.scss'],
})
export class Page403Component {
  constructor(private auth: AuthenticationService) {}
}
