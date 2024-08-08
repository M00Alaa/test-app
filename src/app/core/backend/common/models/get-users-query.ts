/* tslint:disable */
/* eslint-disable */
import { FilteredQuery } from '../models/filtered-query';
import { SortedQuery } from '../models/sorted-query';
export interface GetUsersQuery {
  filters?: Array<FilteredQuery> | null;
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string | null;
  sorts?: Array<SortedQuery> | null;
}
