/* tslint:disable */
/* eslint-disable */
import { City } from '../models/city';
export interface CityBasePaginatedList {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  items?: Array<City> | null;
  pageNumber?: number;
  totalCount?: number;
  totalPages?: number;
}
