/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ZorroModule } from 'src/app/shared/modules/zorro.module';
import { ScrollXComponent } from 'src/app/shared/components/scroll-x/scroll-x.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category, MainCategoriesVm } from 'src/app/core/backend/elites/models';
import {
  CategoryService,
  MainCategoryService,
} from 'src/app/core/backend/elites/services';
import { SWAL } from 'src/app/app-const';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { SubCategoryFormComponent } from './category/sub-category-form/sub-category-form.component';

@Component({
  selector: 'elites-categories',
  standalone: true,
  imports: [
    CommonModule,
    ZorroModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollXComponent,
    NgbPaginationModule,
  ],
  templateUrl: './elites-categories.component.html',
  styleUrls: ['./elites-categories.component.scss'],
})
export class ElitesCategoriesComponent implements OnInit, OnDestroy {
  #destroy = new Subscription();
  searchTerm: string = '';
  categories: MainCategoriesVm[] = [];
  subCategories: Category[] = [];
  dropdownState: { [key: string]: boolean } = {};
  _page = 1;
  _total = 0;
  _pageSize = 3;

  readonly #location = inject(Location);
  readonly #modalService = inject(NgbModal);
  readonly #subCategoriesService = inject(CategoryService);
  private readonly mainCategoriesService = inject(MainCategoryService);

  toggleDropdown(itemId: string | undefined): void {
    if (itemId !== undefined) {
      for (const key in this.dropdownState) {
        if (key !== itemId) {
          this.dropdownState[key] = false;
        }
      }
      this.dropdownState[itemId] = !this.dropdownState[itemId];
      this.getSubCategories(itemId);
    }
  }

  isDropdownOpen(itemId: string | undefined): boolean {
    return itemId !== undefined && !!this.dropdownState[itemId];
  }
  ngOnInit(): void {
    this.getCategory(this._page);
  }

  goBack() {
    this.#location.back();
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
          console.log(res);
          this.subCategories = res.categories?.items as Category[];
          console.log('hfhf', this.subCategories);
        }),
    );
  }

  openCategoryModal(task?: MainCategoriesVm) {
    const modalRef = this.#modalService.open(CategoryFormComponent, {
      modalDialogClass: 'col-12 col-md-10 max-w-1100px',
      windowClass: 'bg-gray bg-opacity-50',
    });
    modalRef.componentInstance.setItem = task;
    modalRef.closed.subscribe((res) => {
      if (res) {
        this.getCategory(1);
      }
    });
  }
  openSubCategoryModal(main?: MainCategoriesVm) {
    const modalRef = this.#modalService.open(SubCategoryFormComponent, {
      modalDialogClass: 'col-12 col-md-10 max-w-1100px',
      windowClass: 'bg-gray bg-opacity-50',
    });
    modalRef.componentInstance.setItem = main;
    modalRef.closed.subscribe((res) => {
      if (res) {
        this.getCategory(1);
      }
    });
  }

  getCategory(page: number) {
    this._page = page;
    this.#destroy.add(
      this.mainCategoriesService
        .apiMainCategoryGetMainCategoriesPost({
          body: {
            pageNumber: this._page,
            pageSize: this._pageSize,
            searchTerm: this.searchTerm,
            filters: [],
            sorts: [],
          },
        })
        .subscribe({
          next: (response) => {
            this.categories = response.mainCategories
              ?.items as MainCategoriesVm[];
            this._total = response.mainCategories?.totalCount ?? 0;
          },
          error: (error) => {
            console.error('Error getting cities', error);
          },
        }),
    );
  }

  deleteCategory(id: string | undefined) {
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
            this.mainCategoriesService
              .apiMainCategoryDeleteMainCategoryDelete({
                body: {
                  id: id,
                },
              })
              .subscribe({
                next: () => {
                  SWAL('success', 'تمت حذف  التخصص بنجاح', '');
                  this.getCategory(1);
                },
                error: () => {
                  SWAL('error', 'لا يمكن حذف التخصص مستخدم', '');
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
