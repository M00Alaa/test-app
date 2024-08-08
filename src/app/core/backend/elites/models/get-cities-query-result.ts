/* tslint:disable */
/* eslint-disable */
import { CityBasePaginatedList } from '../models/city-base-paginated-list';
import { ErrorCode } from '../models/error-code';
export interface GetCitiesQueryResult {
  cities?: CityBasePaginatedList;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
