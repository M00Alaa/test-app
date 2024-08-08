/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzFormFullModule } from '../../modules/nz-form-full/nz-form-full.module';

@Component({
  selector: 'search-input'!,
  standalone: true,
  imports: [CommonModule, NzFormFullModule, FormsModule],
  template: `
    <nz-input-group
      [ngStyle]="customStyle"
      nzSize="small"
      class="bg-white"
      [nzPrefix]="prefixIconSearch"
    >
      <input
        [(ngModel)]="searchTerm"
        type="text"
        (ngModelChange)="onSearchTermChange($event)"
        class="bg-transparent p-1"
        nz-input
        placeholder="ابحــث.."
      />
    </nz-input-group>
    <ng-template #prefixIconSearch>
      <span class="aya-search text-body"></span>
    </ng-template>
  `,
})
export class SearchInputComponent {
  @Input() customStyle: any;
  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchTermChange(newTerm: string): void {
    this.searchTermChange.emit(newTerm);
  }
}
