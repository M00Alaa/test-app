import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroModule } from '../../modules/zorro.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'sort-button'!,
  standalone: true,
  imports: [CommonModule, ZorroModule, TranslateModule],
  template: `
    <button
      type="button"
      nz-dropdown
      [nzDropdownMenu]="sortMenu"
      nzOverlayClassName="primary"
      [nzPlacement]="'bottomCenter'"
      nzTrigger="click"
      class="btn btn-sm border-0 btn-primary bg-primary bg-opacity-10 d-flex align-items-center px-4 gap-2 text-primary"
    >
      <span class="aya-sliders small text-primary"></span>
      <span class="text-body">
        <span class="text-body">
          {{ sortValue ? (sortValue | translate) : 'ترتيب' }}
        </span>
      </span>
      <span class="aya-chevron-down text-primary fs-10px"></span>
    </button>

    <nz-dropdown-menu #sortMenu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item (click)="onSortChange('OLD')">الأقدم</li>
        <li nz-menu-item (click)="onSortChange('NEW')">الأحدث</li>
        <li nz-menu-item (click)="onSortChange('ALPHA')">أبجدي</li>
      </ul>
    </nz-dropdown-menu>
  `,
})
export class SortButtonComponent {
  @Input() sortValue: 'OLD' | 'NEW' | 'ALPHA' | null;
  @Output() sortChanged: EventEmitter<'OLD' | 'NEW' | 'ALPHA' | null> =
    new EventEmitter<'OLD' | 'NEW' | 'ALPHA' | null>();

  onSortChange(type: 'OLD' | 'NEW' | 'ALPHA' | null): void {
    this.sortChanged.emit(type);
  }
}
