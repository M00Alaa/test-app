/* tslint:disable */
/* eslint-disable */
import { MainCategoriesVm } from '../models/main-categories-vm';
export interface MainCategoriesVmBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<MainCategoriesVm> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
