import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mg-system-switcher',
  templateUrl: './system-switcher.component.html',
  styleUrls: ['./system-switcher.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export default class SystemSwitcherComponent {
  @Input() light: boolean;
}
