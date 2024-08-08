/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { Location } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Observable, Subscription } from 'rxjs';
import { SWAL } from 'src/app/app-const';
import { FileUploadService } from 'src/app/clients/service/file-upload.service';
import { AttachmentService } from 'src/app/core/backend/common/services';

import {
  City,
  EliteVm,
  MainCategoriesVm,
  Qualification,
} from 'src/app/core/backend/elites/models';
import {
  CategoryService,
  CityService,
  ElitesService,
  MainCategoryService,
  QualificationsService,
} from 'src/app/core/backend/elites/services';
import { Category } from 'src/app/core/backend/elites/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'elites-form',
  templateUrl: './elites-form.component.html',
  styleUrls: ['./elites-form.component.scss'],
})
export class ElitesFormComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef;
  #destroy = new Subscription();
  domain = environment.api + '/';
  message: string[] = [];
  fileName: string = '';
  gettingData = false;
  itemDetails: EliteVm | undefined;
  selectedFiles: File[] = [];
  subCategories: Category[] = [];
  subCategoriesItems: Category | undefined;
  submitting = false;
  cities: City[] = [];
  categories: MainCategoriesVm[] = [];
  qualifications: Qualification[] = [];
  progressInfos: any[] = [];
  fileInfos?: Observable<any>;
  socialUrl: string = '';
  CategoryArr = Object.values(this.categories);

  constructor(private uploadService: FileUploadService) {
    this.fileInfos = this.uploadService.getFiles();
  }

  readonly #router = inject(Router);
  readonly #fb = inject(FormBuilder);
  readonly #location = inject(Location);
  readonly #route = inject(ActivatedRoute);
  readonly #subCategoriesService = inject(CategoryService);
  readonly #citiesService = inject(CityService);
  readonly #elitesService = inject(ElitesService);
  readonly #categoriesService = inject(MainCategoryService);
  readonly #attachmentService = inject(AttachmentService);
  readonly #qualificationService = inject(QualificationsService);

  form: FormGroup = this.initForm();

  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
  ngOnInit(): void {
    this.#getCity();
    this.getRouting();
    this.#getCategory();
    this.#getQualification();
    this.getSubCategories(this.itemDetails?.id);
    this.form.get('SocialUrl')?.valueChanges.subscribe((value) => {
      this.socialUrl = value;
    });
  }

  getSubCategories(id: string | undefined) {
    this.#destroy.add(
      this.#subCategoriesService
        .apiCategoryGetCategoriesPost({
          body: {
            pageNumber: 0,
            pageSize: 20,
            searchTerm: '',
            filters: [],
            sorts: [],
            mainCategoryId: id,
          },
        })
        .subscribe((res) => {
          this.subCategories = res.categories?.items as Category[];
          console.log(this.subCategories);
        }),
    );
  }

  getRouting() {
    this.#route.params.subscribe((res) => {
      if (res['id']) {
        this.getDataForEdit(res['id']);
      }
    });
  }

  #getCity() {
    this.#destroy.add(
      this.#citiesService
        .apiCityGetCitiesPost({
          body: {},
        })
        .subscribe({
          next: (response) => {
            this.cities = response.cities?.items as City[];
          },
        }),
    );
  }

  #getCategory() {
    this.#destroy.add(
      this.#categoriesService
        .apiMainCategoryGetMainCategoriesPost({
          body: {},
        })
        .subscribe({
          next: (response) => {
            this.categories = response.mainCategories
              ?.items as MainCategoriesVm[];
          },
        }),
    );
  }

  #getQualification() {
    this.#destroy.add(
      this.#qualificationService
        .apiQualificationsGetQualificationsPost({
          body: {},
        })
        .subscribe({
          next: (response) => {
            this.qualifications = response.qualifications
              ?.items as Qualification[];
          },
        }),
    );
  }

  extractFileName(attachment): string {
    const parts = attachment.split('_');
    return parts[parts.length - 1];
  }
  initForm(): FormGroup {
    return this.#fb.group({
      Name: new FormControl<string | undefined>(undefined, Validators.required),
      Email: new FormControl<string | undefined>(undefined),
      BestAchievement: new FormControl<string | undefined>(undefined),
      QualificationId: new FormControl<Qualification | null>(null),
      CityId: new FormControl<City | null>(null, Validators.required),
      MainCategoryId: new FormControl<MainCategoriesVm | null>(null),
      CategoryId: new FormControl<Category | null>(null),
      Workplace: new FormControl<string | undefined>(undefined),
      SocialUrl: new FormControl<string | undefined>(undefined),
      Position: new FormControl<string | undefined>(undefined),
      PhoneNumber: new FormControl<string | undefined>(undefined),
      Notes: new FormControl<string | undefined>(undefined),
      attachmentUrls: new FormControl(),
      attachmentFiles: new FormControl(),
      profilePictures: new FormControl(),
    });
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.selectedFiles.push(...event.addedFiles);
    this.form.controls.attachmentFiles.patchValue(this.selectedFiles);
  }

  onRemove(event) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(event), 1);
    this.form.controls.attachmentFiles.patchValue(this.selectedFiles);
  }

  removeFile() {
    if (this.itemDetails && this.itemDetails.attachments) {
      const attachmentUrl = this.itemDetails.attachments[0];
      this.#attachmentService
        .deleteFilePost({
          body: {
            Url: attachmentUrl,
          },
        })
        .subscribe(
          () => {
            SWAL('success', 'تم حذف السيرة الذاتية بنجاح');
            this.getDataForEdit(this.itemDetails?.id!);
          },
          (error) => {
            console.error('Error deleting file:', error);
          },
        );
    }
  }

  onSelectImage(control: 'Cover' | 'Profile', event: NgxDropzoneChangeEvent) {
    if (event.rejectedFiles.length > 0) {
      SWAL('warning', 'الملف غير صالح');
      return;
    }
    this.form.controls.profilePictures.patchValue(event.addedFiles[0]);
  }

  onRemoveImage() {
    this.form.controls.profilePictures.reset();
  }

  getDataForEdit(id: string) {
    if (id) {
      this.gettingData = true;

      this.#elitesService
        .apiElitesGetElitesPost({
          body: { id },
        })
        .subscribe({
          next: (res) => {
            const eliteItems = res.elites?.items ?? []; // Provide a default empty array if items are null or undefined
            if (eliteItems.length > 0) {
              this.itemDetails = eliteItems[0] as EliteVm;
              this.form.patchValue({
                Id: this.itemDetails.id,
                Name: this.itemDetails.name,
                Position: this.itemDetails.position,
                Workplace: this.itemDetails.workplace,
                BestAchievement: this.itemDetails.bestAchievement,
                SocialUrl: this.itemDetails.socialUrl,
                CityId: this.itemDetails.cityId,
                CategoryId: this.itemDetails.categoryId,
                MainCategoryId: this.itemDetails.mainCategoryId,
                QualificationId: this.itemDetails.qualificationId,
                Attachments: this.form.controls.attachmentFiles.value,
                Notes: this.itemDetails.notes,
                ProfilePicture: this.itemDetails.profilePictures,
                Email: this.itemDetails.email,
                PhoneNumber: this.itemDetails.phoneNumber,
              });
            }
            this.gettingData = false;
          },
          error: (err) => {
            SWAL('error', err?.errorCode);
            this.gettingData = false;
            this.#router.navigate(['/system-elites/home']);
          },
        });
    }
  }

  updateForm() {
    const formValue = this.form.getRawValue();
    const formData = new FormData();
    if (formValue.Attachments) {
      formData.append('Attachments', formValue.Attachments);
    }

    this.#destroy.add(
      this.#elitesService
        .apiElitesUpdateElitePost({
          body: {
            Id: this.itemDetails?.id ?? '',
            Name: formValue.Name,
            Position: formValue.Position,
            Workplace: formValue.Workplace,
            BestAchievement: formValue.BestAchievement,
            SocialUrl: formValue.SocialUrl,
            CityId: formValue.CityId,
            CategoryId: formValue.CategoryId,
            QualificationId: formValue.QualificationId,
            Attachments: this.form.controls.attachmentFiles.value,
            Notes: formValue.Notes,
            ProfilePicture: formValue.profilePictures,
            Email: formValue.Email,
            PhoneNumber: formValue.PhoneNumber,
          },
        })
        .subscribe(
          () => {
            this.submitting = false;
            SWAL('success', 'تم تعديل الملف الشخصى بنجاح');
            this._navigateAfterSave();
          },
          (error) => {
            this.submitting = false;
            SWAL('error', error?.errorCode, error?.message || '');
          },
        ),
    );
  }

  onMainCategoryChange(selectedId: string | undefined) {
    if (selectedId) {
      this.getSubCategories(selectedId);
      // this.subCategories = this.categories.find(category => category.id === selectedId) as MainCategoriesVm [];
      this.form.get('CategoryId')?.setValue(null);
    } else {
      this.subCategories = []; // Clear subcategories if main category is not selected
    }
  }
  addForm() {
    const formValue = this.form.getRawValue();
    const formData = new FormData();
    if (formValue.Attachments) {
      formData.append('Attachments', formValue.Attachments);
    }
    this.#destroy.add(
      this.#elitesService
        .apiElitesCreateElitePost({
          body: {
            Name: formValue.Name,
            Position: formValue.Position,
            Workplace: formValue.Workplace,
            BestAchievement: formValue.BestAchievement,
            SocialUrl: formValue.SocialUrl,
            CityId: formValue.CityId,
            CategoryId: formValue.CategoryId,
            QualificationId: formValue.QualificationId,
            Attachments: this.form.controls.attachmentFiles.value,
            Notes: formValue.Notes,
            ProfilePicture: formValue.profilePictures,
            Email: formValue.Email,
            PhoneNumber: formValue.PhoneNumber,
          },
        })
        .subscribe(
          () => {
            this.submitting = false;
            SWAL('success', 'تم اضافة الملف الشخصى بنجاح');
            this._navigateAfterSave();
          },
          (error) => {
            this.submitting = false;
            SWAL('error', error?.errorCode, error?.message || '');
          },
        ),
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitting = true;
      if (this.itemDetails?.id) {
        this.updateForm();
      } else {
        this.addForm();
      }
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      SWAL('error', 'برجاء ملأ جميع البيانات');
    }
  }
  _navigateAfterSave() {
    this.#router.navigate(['../../'], {
      relativeTo: this.#route,
    });
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total,
            );
          } else if (event instanceof HttpResponse) {
            const msg = file.name + ': Successful!';
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          let msg = file.name + ': Failed!';

          if (err.error && err.error.message) {
            msg += ' ' + err.error.message;
          }

          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        },
      });
    }
  }

  goBack() {
    this.#location.back();
  }
  downloadAttachment(url: string) {
    const link = document.createElement('a');
    link.href = this.domain + url;
    link.download = url.split('/').pop() ?? '';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }
}
