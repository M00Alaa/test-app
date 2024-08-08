/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from '../models/error-code';
import { MainCategory } from '../models/main-category';
export interface UpdateMainCategoryCommandResult {
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
  mainCategory?: MainCategory;
}
