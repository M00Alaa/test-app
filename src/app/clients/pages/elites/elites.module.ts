import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbAccordionModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ScrollXComponent } from 'src/app/shared/components/scroll-x/scroll-x.component';
import { IsRequiredPipe } from 'src/app/shared/pipes/is-required.pipe';
import { RoleDirective } from 'src/app/shared/directives/app-permissions.directive';
import { ElitesFormComponent } from './elites-form/elites-form.component';
import { ElitesKSAComponent } from './elites-ksa.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CustomDropzoneFilePreviewComponent } from 'src/app/shared/components/dropzone-custom-file-previewer/custom-dropzone-file-preview.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ROLES } from 'src/app/app-const';
import { ElitesDetailsComponent } from './elites-details/elites-details.component';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { CustomDropzonePreviewComponent } from 'src/app/shared/components/custom-image-previewer/custom-dropzone-preview.component';
import { SearchInputComponent } from 'src/app/shared/components/search-input/search-input.component';

const routes: Routes = [
  {
    path: '',
    component: ElitesKSAComponent,
  },
  {
    path: 'add',
    component: ElitesFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [ROLES.Admin],
    },
  },
  {
    path: 'add/:id',
    component: ElitesFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [ROLES.Admin],
    },
  },
  {
    path: 'details/:id',
    component: ElitesDetailsComponent,
  },
];

@NgModule({
  declarations: [
    ElitesKSAComponent,
    ElitesFormComponent,
    ElitesDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbPaginationModule,
    NzTableModule,
    CustomDropzoneFilePreviewComponent,
    CustomDropzonePreviewComponent,
    NzInputModule,
    ScrollXComponent,
    NgxDropzoneModule,
    NgbDropdownModule,
   SearchInputComponent,
    NzFormModule,
    RoleDirective,
    NzButtonModule,
    IsRequiredPipe,
    ReactiveFormsModule,
    NgbModalModule,
    TranslateModule,
    NzCheckboxModule,
    NgbAccordionModule,
    NgSelectModule,
    FormsModule,
    ZorroModule,
  ],
})
export class ElitesModule {}
