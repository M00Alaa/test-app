/* tslint:disable */
/* eslint-disable */
import { FilteredQuery } from '../models/filtered-query';
import { SortedQuery } from '../models/sorted-query';
export interface GetCategoriesQuery {
  filters?: Array<FilteredQuery> | null;
  mainCategoryId?: string | null;
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string | null;
  sorts?: Array<SortedQuery> | null;
}
