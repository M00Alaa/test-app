/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCategoryService } from 'src/app/core/backend/elites/services';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { SWAL } from 'src/app/app-const';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainCategoriesVm } from 'src/app/core/backend/elites/models';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [CommonModule, ZorroModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnDestroy {
  #destroy = new Subscription();
  itemDetails: MainCategoriesVm | undefined;
  readonly #mainCategoriesService = inject(MainCategoryService);
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
  });

  onSubmit() {
    if (this.form.valid) {
      if (this.itemDetails?.id) {
        this.updateCategory();
      }else{
        this.addCategory();
      }
    }
  }

  updateCategory() {
    const categoryName = this.form.value.name;
    if (categoryName) {
      const id = this.itemDetails?.id;
      if (id !== undefined) {
        this.#destroy.add(
          this.#mainCategoriesService
            .apiMainCategoryUpdateMainCategoryPatch({
              body: {
                id,
                name: categoryName,
              },
            })
            .subscribe({
              next: () => {
                SWAL('success', 'تمت تعديل التخصص الرئيسى بنجاح', '');
                this.form.reset();
                this.#activeModal.close(true);
              },
              error: (error) => {
                SWAL('error', error?.errorCode, error?.message || '');
              },
            }),
        );
      }
    }
  }
  addCategory() {
    const categoryName = this.form.value.name;
    if (categoryName) {
      this.#destroy.add(
        this.#mainCategoriesService
          .apiMainCategoryCreateMainCategoryPost({
            body: {
              name: categoryName,
            },
          })
          .subscribe({
            next: () => {
              SWAL('success', 'تمت إضافة التخصص الرئيسى بنجاح', '');
              this.form.reset();
              this.#activeModal.close(true);
            },
            error: (error) => {
              SWAL('error', error?.errorCode, error?.message || '');
            },
          }),
      );
    }
  }

  ngOnDestroy(): void {
    this.#destroy.unsubscribe();
  }
}
