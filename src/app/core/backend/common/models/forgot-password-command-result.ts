/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
export interface ForgotPasswordCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  token?: string | null;
}
