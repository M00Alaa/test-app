import { Component, OnInit, inject } from '@angular/core';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { SWAL, createSorting } from 'src/app/app-const';
import {
  ApplicationUser,
  SortDirection,
  SortedQuery,
} from 'src/app/core/backend/common/models';

import { ColumnItem } from 'src/app/core/models/column-item';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { UsersColumns } from '../../models/constants/users-column';
import { AccountService } from 'src/app/core/backend/common/services';
import { Location } from '@angular/common';

@Component({
  selector: 'users-ksa'!,
  templateUrl: './users-ksa.component.html',
  styleUrls: ['./users-ksa.component.scss'],
})
export class UsersKSAComponent implements OnInit {
  #destroy = new Subscription();
  listOfColumns: ColumnItem[] = UsersColumns;
  sorts: SortedQuery[] = [];
  users: ApplicationUser[] = [];
  _page = 1;
  _total = 0;
  _pageSize = 20;
  gettingUsers = false;
  searchTerm = '';
  sortValue: 'OLD' | 'NEW' | 'ALPHA' | null = null;
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

  readonly #accountService = inject(AccountService);
  readonly #location = inject(Location);

  ngOnInit(): void {
    this.getAllUsers(this._page);
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
      this.getAllUsers(this._page);
    }
  }

  protected sortByCreatedDate(type: 'OLD' | 'NEW' | 'ALPHA' | null) {
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

    this.getAllUsers(this._page);
  }

  getAllUsers(page: number, searchTerm?: string) {
    this._page = page;
    this.gettingUsers = true;
    this.#accountService
      .getAllUsersPost({
        body: {
          pageNumber: this._page,
          pageSize: this._pageSize,
          searchTerm: searchTerm,
          filters: [],
          sorts: createSorting(
            { ...this.filters.sort, property: 'CreatedDate' },
            { ...this.filters.Alpha, property: 'Name' },
          ),
        },
      })
      .subscribe({
        next: (res) => {
          this.users = res.result?.items as ApplicationUser[];
          this.gettingUsers = false;
          this._total = res.result?.totalCount || 0;
        },
        error: (err) => {
          this.gettingUsers = false;
          SWAL('error', err?.errorCode);
        },
      });
  }

  goBack() {
    this.#location.back();
  }
  showDeleteConfirmation(id: string | undefined) {
    Swal.fire({
      title: 'هل أنت متأكد من الحذف؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'حــذف',
      cancelButtonText: 'إلغــاء',
    }).then((result) => {
      if (result.isConfirmed) {
        this.#destroy.add(
          this.#accountService
            .deleteUserDelete({
              body: {
                userId: id ?? '',
              },
            })
            .subscribe({
              next: () => {
                Swal.fire('تم الحذف', '', 'success');
                this.getAllUsers(this._page);
              },
              error: (res) => {
                Swal.fire('خطأ', res?.errorCode, 'error');
              },
            }),
        );
      }
    });
  }
}
