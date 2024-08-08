/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { Qualification } from '../models/qualification';
export interface DeleteQualificationCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  qualification?: Qualification;
}
