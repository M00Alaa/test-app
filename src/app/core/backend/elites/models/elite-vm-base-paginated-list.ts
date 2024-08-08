/* tslint:disable */
/* eslint-disable */
import { EliteVm } from '../models/elite-vm';
export interface EliteVmBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<EliteVm> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
