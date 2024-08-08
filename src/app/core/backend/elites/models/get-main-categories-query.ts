/* tslint:disable */
/* eslint-disable */
import { FilteredQuery } from '../models/filtered-query';
import { SortedQuery } from '../models/sorted-query';
export interface GetMainCategoriesQuery {
  filters?: Array<FilteredQuery> | null;
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string | null;
  sorts?: Array<SortedQuery> | null;
}
