import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
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

import { UsersFormComponent } from './users-form/users-form.component';
import { UsersKSAComponent } from './users-ksa.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CustomDropzoneFilePreviewComponent } from 'src/app/shared/components/dropzone-custom-file-previewer/custom-dropzone-file-preview.component';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { CustomDropzonePreviewComponent } from 'src/app/shared/components/custom-image-previewer/custom-dropzone-preview.component';
import { SearchInputComponent } from 'src/app/shared/components/search-input/search-input.component';
import { SortButtonComponent } from 'src/app/shared/components/sort-button/sort-button.component';

const routes: Routes = [
  {
    path: '',
    component: UsersKSAComponent,
  },
  {
    path: 'add',
    component: UsersFormComponent,
  },
  {
    path: 'add/:id',
    component: UsersFormComponent,
  },
];

@NgModule({
  declarations: [UsersKSAComponent, UsersFormComponent],
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
    SortButtonComponent,
    NzFormModule,
    NzButtonModule,
    ZorroModule,
    IsRequiredPipe,
    ReactiveFormsModule,
    NgbModalModule,
    TranslateModule,
    NzCheckboxModule,
    NgSelectModule,
    FormsModule,
  ],
})
export class UsersModule {}
