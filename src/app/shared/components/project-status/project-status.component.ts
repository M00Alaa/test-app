import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectStatus } from 'src/app/core/backend/pm/models';

@Component({
  selector: 'mg-project-status',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss']
})
export class ProjectStatusComponent {
  allStatus = ProjectStatus;

  @Input() withoutBG = false;
  @Input({required: true}) status: ProjectStatus | undefined;
}
