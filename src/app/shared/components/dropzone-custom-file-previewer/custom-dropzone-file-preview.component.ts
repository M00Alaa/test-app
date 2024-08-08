/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxDropzoneModule, NgxDropzonePreviewComponent } from 'ngx-dropzone';

@Component({
  selector: 'custom-dropzone-file-preview',
  template: `
    <div
      *ngIf="loading"
      style="z-index: 8;min-height: 100px;"
      class="position-absolute
                                   bg-dark text-white bg-opacity-25 rounded-3 top-0 left-0 w-100
                                   d-flex align-items-center justify-content-center h-100 loading-spin"
    >
      <span class="bx bx-loader bx-spin font-size-24"></span>
    </div>
    <div>
      {{ _extractFileName(url) }}
    </div>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
  `,
  styleUrls: ['./custom-dropzone-file-preview.component.scss'],
  standalone: true,
  imports: [NgxDropzoneModule, CommonModule],
  providers: [
    {
      provide: NgxDropzonePreviewComponent,
      useExisting: CustomDropzoneFilePreviewComponent,
    },
  ],
})
export class CustomDropzoneFilePreviewComponent extends NgxDropzonePreviewComponent {
  @Input() loading = false;
  url = '';
  @Input() set _url(vale: string) {
    this.url = this.extractFileName(vale);
  }
  extractFileName(path: string): string {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }

  _extractFileName(attachment): string {
    const parts = attachment.split('_');
    return parts[parts.length - 1];
  }

  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }
}