import { NgModule } from "@angular/core";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  exports: [
    NgxDropzoneModule,
    NgScrollbarModule,
    NgbTooltipModule,
    NgSelectModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbDropdownModule,
  ],
})
export class BootstrapModule {}
