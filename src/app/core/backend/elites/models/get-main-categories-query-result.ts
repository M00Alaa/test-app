/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { MainCategoriesVmBasePaginatedList } from '../models/main-categories-vm-base-paginated-list';
export interface GetMainCategoriesQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  mainCategories?: MainCategoriesVmBasePaginatedList;
}
