/* tslint:disable */
/* eslint-disable */
import { EliteVmBasePaginatedList } from '../models/elite-vm-base-paginated-list';
import { ErrorCode } from '../models/error-code';
export interface GetElitesQueryResult {
  elites?: EliteVmBasePaginatedList;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
