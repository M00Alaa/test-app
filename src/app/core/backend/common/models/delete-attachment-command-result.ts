/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
export interface DeleteAttachmentCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
