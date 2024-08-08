/* tslint:disable */
/* eslint-disable */
import { FilteredQuery } from '../models/filtered-query';
import { SortedQuery } from '../models/sorted-query';
export interface GetElitesQuery {
  categoryId?: string | null;
  filters?: Array<FilteredQuery> | null;
  id?: string | null;
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string | null;
  sorts?: Array<SortedQuery> | null;
}
