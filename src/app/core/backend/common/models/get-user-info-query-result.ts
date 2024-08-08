/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { UserInfo } from '../models/user-info';
export interface GetUserInfoQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  userInfo?: UserInfo;
}
