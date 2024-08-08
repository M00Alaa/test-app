import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading...',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="gettingData" class="py-3">
      <div class="d-flex justify-content-center align-items-center">
        <div
          class="spinner-border spinner-border-sm text-primary"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  `,
})
export class LoaderComponent {
  @Input() gettingData!: boolean;
}
