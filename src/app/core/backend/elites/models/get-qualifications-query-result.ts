/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { QualificationBasePaginatedList } from '../models/qualification-base-paginated-list';
export interface GetQualificationsQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  qualifications?: QualificationBasePaginatedList;
}
