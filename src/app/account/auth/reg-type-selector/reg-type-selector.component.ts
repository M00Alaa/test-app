import { Component } from '@angular/core';
import { logo } from 'src/app/app-const';

@Component({
  selector: 'mg-reg-type-selector',
  templateUrl: './reg-type-selector.component.html',
  styleUrls: ['./reg-type-selector.component.scss']
})
export class RegTypeSelectorComponent {
  logos = logo;
}
