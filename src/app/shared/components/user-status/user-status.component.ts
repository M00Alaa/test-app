import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/backend/common/models';

@Component({
  selector: 'mg-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {
  
  @Input({required: true}) user: ApplicationUser;
}
