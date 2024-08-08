/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
export interface ApplicationUserBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<ApplicationUser> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
