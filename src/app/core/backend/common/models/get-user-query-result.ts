/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { ErrorCode } from '../models/error-code';
export interface GetUserQueryResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  roles?: Array<string> | null;
  user?: ApplicationUser;
}
