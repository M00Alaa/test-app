/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
export interface LoginCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isLockout?: boolean;
  isNotAllowed?: boolean;
  isSuccess?: boolean;
  need2FA?: boolean;
  token?: string | null;
}
