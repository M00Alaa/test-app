/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ScrollXComponent } from 'src/app/shared/components/scroll-x/scroll-x.component';
import { Subscription } from 'rxjs';
import { Qualification } from 'src/app/core/backend/elites/models';
import { QualificationsService } from 'src/app/core/backend/elites/services';
import { SWAL } from 'src/app/app-const';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import Swal from 'sweetalert2';
import { SearchInputComponent } from 'src/app/shared/components/search-input/search-input.component';

@Component({
  selector: 'elites-qualifications',
  standalone: true,
  imports: [
    CommonModule,
    ZorroModule,
    ReactiveFormsModule,
    ScrollXComponent,
    NgbPagination,
    SearchInputComponent,
  ],
  templateUrl: './elites-qualifications.component.html',
  styleUrls: ['./elites-qualifications.component.scss'],
})
export class ElitesQualificationsComponent implements OnInit, OnDestroy {
  #destroy = new Subscription();
  qualifications: Qualification[] = [];
  _page = 1;
  _total = 0;
  _pageSize = 5;

  private readonly fb = inject(FormBuilder);
  readonly #location = inject(Location);
  private readonly qualificationService = inject(QualificationsService);
  readonly #modalService = inject(NgbModal);

  form = this.fb.group({
    name: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      this.addQualification();
    }
  }

  ngOnInit(): void {
    this.getQualification(1);
  }

  getQualification(page: number, searchTerm?: string) {
    this._page = page;
    this.#destroy.add(
      this.qualificationService
        .apiQualificationsGetQualificationsPost({
          body: {
            searchTerm: searchTerm,
            sorts: [],
            filters: [],
            pageSize: 99999,
            pageNumber: 1,
          },
        })
        .subscribe({
          next: (response) => {
            this.qualifications = response.qualifications
              ?.items as Qualification[];
            this._total = response.qualifications?.totalCount as number;
          },
          error: (error) => {
            SWAL('error', error?.errorCode, error?.message || '');
          },
        }),
    );
  }

  openQualificationModal(task?: Qualification) {
    const modalRef = this.#modalService.open(QualificationFormComponent, {
      modalDialogClass: 'col-12 col-md-10 max-w-1100px',
      windowClass: 'bg-gray bg-opacity-50',
    });
    modalRef.componentInstance.setItem = task;
    modalRef.closed.subscribe((res) => {
      if (res) {
        this.getQualification(this._page);
      }
    });
  }

  addQualification() {
    const qualificationName = this.form.value.name;
    if (qualificationName) {
      this.#destroy.add(
        this.qualificationService
          .apiQualificationsCreateQualificationPost({
            body: {
              name: qualificationName,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت إضافة المؤهل بنجاح', '');
              this.form.reset();
              this.getQualification(this._page);
            },
            error: (error) => {
              SWAL('error', error?.errorCode, error?.message || '');
            },
          }),
      );
    }
  }

  goBack() {
    this.#location.back();
  }

  deleteQualification(id: string | undefined) {
    Swal.fire({
      title: 'هل أنت متأكد من الحذف؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'حــذف',
      cancelButtonText: 'إلغــاء',
    }).then((result) => {
      if (result.isConfirmed) {
        if (id)
          this.#destroy.add(
            this.qualificationService
              .apiQualificationsDeleteQualificationDelete({
                body: {
                  id: id,
                },
              })
              .subscribe({
                next: () => {
                  SWAL('success', 'تمت حذف  المؤهل بنجاح', '');
                  this.getQualification(this._page);
                },
                error: () => {
                  SWAL('error', 'لا يمكن حذف مؤهل مستخدم', '');
                },
              }),
          );
      }
    });
  }

  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
}
