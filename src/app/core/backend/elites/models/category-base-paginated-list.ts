/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
export interface CategoryBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<Category> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
