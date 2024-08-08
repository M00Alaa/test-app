/* tslint:disable */
/* eslint-disable */
import { CategoryBasePaginatedList } from '../models/category-base-paginated-list';
import { ErrorCode } from '../models/error-code';
export interface GetCategoriesQueryResult {
  categories?: CategoryBasePaginatedList;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
