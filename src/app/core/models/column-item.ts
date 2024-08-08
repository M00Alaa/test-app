import { NzTableSortOrder } from 'ng-zorro-antd/table';

export interface ColumnItem {
  key: string;
  name: string;
  sortable?: boolean;
  nzEllipsis?: boolean;
  sortOrder?: NzTableSortOrder;
  sortDirections?: NzTableSortOrder[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sortFn?: (a: any, b: any) => any;
  maxWidth?: number;
  class?: string;
  defaultOrder?: 'ascend' | 'descend' | null;
  roles?: string[];
}
