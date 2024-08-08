/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { IdentityRole } from '../models/identity-role';
export interface GetRolesQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  roles?: Array<IdentityRole> | null;
}
