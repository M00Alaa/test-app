/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
export interface ConfirmEmailCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
