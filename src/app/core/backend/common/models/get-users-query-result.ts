/* tslint:disable */
/* eslint-disable */
import { ApplicationUserBasePaginatedList } from '../models/application-user-base-paginated-list';
import { ErrorCode } from '../models/error-code';
export interface GetUsersQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  result?: ApplicationUserBasePaginatedList;
}
