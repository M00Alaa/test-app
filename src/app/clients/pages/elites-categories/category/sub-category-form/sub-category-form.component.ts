/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { Subscription } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/core/backend/elites/services';
import { Category, MainCategoriesVm } from 'src/app/core/backend/elites/models';
import Swal from 'sweetalert2';
import { SWAL } from 'src/app/app-const';

@Component({
  selector: 'sub-category-form',
  standalone: true,
  imports: [CommonModule, ZorroModule, ReactiveFormsModule],
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.scss'],
})
export class SubCategoryFormComponent implements OnDestroy, OnInit {
  #destroy = new Subscription();
  itemDetails: MainCategoriesVm | undefined;
  subCategories: Category[] = [];
  isPatched = false
  readonly #subCategoriesService = inject(CategoryService);
  readonly #modalService = inject(NgbModal);
  readonly #activeModal = inject(NgbActiveModal);
  readonly #fb = inject(FormBuilder);

  public set setItem(projectTasks: MainCategoriesVm | undefined) {
    this.itemDetails = projectTasks;
    this.form.patchValue({
      name: projectTasks?.name,
    });
  }

  form = this.#fb.group({
    name: new FormControl<string | null>(null, Validators.required),
    subName: new FormControl<string | null>(null, Validators.required),
  });


  patchSubName(value: string) {
    this.form.patchValue({
      subName: value
    });
    this.isPatched = true; // Set the boolean to true
  }
  ngOnInit(): void {
    this.getSubCategories();
  }

  getSubCategories() {
    this.#destroy.add(
      this.#subCategoriesService
        .apiCategoryGetCategoriesPost({
          body: {
            pageNumber: 0,
            pageSize: 20,
            searchTerm: '',
            filters: [],
            sorts: [],
            mainCategoryId:this.itemDetails?.id
          },
        })
        .subscribe((res) => {
          this.subCategories = res.categories?.items as Category[];
        }),
    );
  }

  addSubCategory() {
    this.#destroy.add(
      this.#subCategoriesService
        .apiCategoryCreateCategoryPost({
          body: {
            name: this.form.value.subName || '',
            mainCategoryId: this.itemDetails?.id,
          },
        })
        .subscribe(() => {
          this.form.get('subName')?.reset();
          this.getSubCategories();
        }),
    );
  }



  editSubCategory(id: string | undefined) {
    const subName = this.form.get('subName')?.value || '';
    this.#destroy.add(
      this.#subCategoriesService
        .apiCategoryUpdateCategoryPatch({
          body: {
            id: id || '',
            name: subName,
            mainCategoryId: this.itemDetails?.id,
          },
        })
        .subscribe(() => {
          this.form.get('subName')?.reset();
          this.getSubCategories();
        }),
    );
  }

  deleteSubCategory(id: string | undefined) {
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
            this.#subCategoriesService
              .apiCategoryDeleteCategoryDelete({
                body: {
                  id: id,
                },
              })
              .subscribe({
                next: () => {
                  SWAL('success', 'تمت حذف  التخصص بنجاح', '');
                  this.getSubCategories();
                },
                error: () => {
                  SWAL('error', 'لا يمكن حذف التخصص مستخدم', '');
                },
              }),
          );
      }
    });
  }

  onCancel() {
    this.#modalService.dismissAll();
  }
  onSubmit() {
    this.getSubCategories();
    this.#activeModal.close();
  }
  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
}
