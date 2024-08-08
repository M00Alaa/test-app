/* tslint:disable */
/* eslint-disable */
import { Qualification } from '../models/qualification';
export interface QualificationBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<Qualification> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
