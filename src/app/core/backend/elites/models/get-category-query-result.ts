/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
import { ErrorCode } from '../models/error-code';
export interface GetCategoryQueryResult {
  category?: Category;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
