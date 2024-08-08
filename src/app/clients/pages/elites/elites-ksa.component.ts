/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { ROLES, SWAL, createSorting } from 'src/app/app-const';
import { SortDirection, SortedQuery } from 'src/app/core/backend/common/models';

import { ColumnItem } from 'src/app/core/models/column-item';

import { ElitesColumns } from '../../models/constants/elites-column';
import {
  CategoryService,
  CityService,
  ElitesService,
  QualificationsService,
} from 'src/app/core/backend/elites/services';
import {
  Category,
  City,
  EliteVm,
  EliteVmBasePaginatedList,
  FilterOperator,
  FilterType,
  Qualification,
} from 'src/app/core/backend/elites/models';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  AuthenticationService,
  MgApplicationUser,
} from 'src/app/core/services/auth.service';
import { MENU } from '../../layout/sidebar/menu';
import { SortValue } from "src/app/shared/models/union";

@Component({
  selector: 'elites-ksa'!,
  templateUrl: './elites-ksa.component.html',
  styleUrls: ['./elites-ksa.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ElitesKSAComponent implements OnInit {
  #destroy = new Subscription();
  listOfColumns: ColumnItem[] = ElitesColumns;
  sorts: SortedQuery[] = [];
  menu = MENU;
  elitesList: EliteVmBasePaginatedList[] = [];
  qualifications: Qualification[] = [];
  acc: MgApplicationUser | null = null;
  filterCityId = null;
  filterCategoryId = null;
  filterQualificationId = null;
  elites: EliteVm[] = [];
  roles = ROLES;
  domain = environment.api + '/';
  _page = 1;
  _total = 0;
  _pageSize = 10;
  gettingUsers = false;
  subCategories: Category[] = [];
  cities: City[] = [];
  sortValue = SortValue;

  filters = {
    sort: {
      direction: SortDirection.Asc,
      sort: false,
    },
    Alpha: {
      direction: SortDirection.Asc,
      sort: false,
    },
    search: '',
  };

  readonly #elitesService = inject(ElitesService);
  readonly #citiesService = inject(CityService);
  private readonly qualificationService = inject(QualificationsService);
  readonly #subCategoriesService = inject(CategoryService);
  constructor(private authService: AuthenticationService) {
    this.authService.identity().subscribe((acc) => {
      this.acc = acc;
    });
  }

  ngOnInit(): void {
    this.getAllElites(this._page);
    this.#getCity();
    this.#getSubCategories();
    this.#getQualification();
  }

  query(key: string, e: NzTableSortOrder) {
    const getDir = (dir: NzTableSortOrder): SortDirection => {
      switch (dir) {
        case 'ascend':
          return SortDirection.Asc;
        case 'descend':
          return SortDirection.Desc;
        default:
          return SortDirection.Asc;
      }
    };

    if (e) {
      this.sorts = [{ propertyName: key, direction: getDir(e) }];
      this.getAllElites(1);
    }
  }

  sortByCreatedDate(type: 'OLD' | 'NEW' | 'ALPHA' | null) {
    this.sortValue = type;
    switch (type) {
      case 'OLD':
        this.filters.sort.direction = SortDirection.Asc;
        this.filters.sort.sort = true;
        this.filters.Alpha.sort = false;
        break;
      case 'NEW':
        this.filters.sort.direction = SortDirection.Desc;
        this.filters.sort.sort = true;
        this.filters.Alpha.sort = false;
        break;
      case 'ALPHA':
        this.filters.sort.sort = false;
        this.filters.Alpha.sort = true;
        break;

      default:
        this.filters.sort.sort = false;
        this.filters.Alpha.sort = false;
        break;
    }

    this.getAllElites(1);
  }
  getAllElites(page: number, searchTerm?: string) {
    this._page = page;
    this.gettingUsers = true;
    this.#elitesService
      .apiElitesGetElitesPost({
        body: {
          pageNumber: this._page,
          pageSize: this._pageSize,
          searchTerm: searchTerm,
          filters: [
            {
              propertyName: 'City',
              values: this.filterCityId != null ? [this.filterCityId] : [],
              type: FilterType.Equals,
              operator: FilterOperator.And,
            },
            {
              propertyName: 'Qualification',
              values:
                this.filterQualificationId != null
                  ? [this.filterQualificationId]
                  : [],
              type: FilterType.Equals,
              operator: FilterOperator.And,
            },
            {
              propertyName: 'Category',
              values:
                this.filterCategoryId != null ? [this.filterCategoryId] : [],
              type: FilterType.Equals,
              operator: FilterOperator.And,
            },
          ],
          sorts: createSorting(
            { ...this.filters.sort, property: 'CreatedDate' },
            { ...this.filters.Alpha, property: 'Name' },
          ),
        },
      })
      .subscribe({
        next: (res) => {
          this.elites = res.elites?.items as EliteVm[];
          this.gettingUsers = false;
          this._total = res.elites?.totalCount || 0;
        },
        error: (err) => {
          this.gettingUsers = false;
          SWAL('error', err?.errorCode);
        },
      });
  }
  #getSubCategories() {
    this.#destroy.add(
      this.#subCategoriesService
        .apiCategoryGetCategoriesPost({
          body: {
            pageNumber: 0,
            pageSize: 20,
            searchTerm: '',
            filters: [],
            sorts: [],
          },
        })
        .subscribe((res) => {
          this.subCategories = res.categories?.items as Category[];
        }),
    );
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

  #getQualification() {
    this.#destroy.add(
      this.qualificationService
        .apiQualificationsGetQualificationsPost({
          body: {},
        })
        .subscribe({
          next: (response) => {
            this.qualifications = response.qualifications
              ?.items as Qualification[];
          },
          error: (error) => {
            SWAL('error', error?.errorCode, error?.message || '');
          },
        }),
    );
  }

  downloadAttachment(url: string) {
    const link = document.createElement('a');
    link.href = this.domain + url;
    link.download = url.split('/').pop() ?? ''; // Extract the file name from the URL
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
