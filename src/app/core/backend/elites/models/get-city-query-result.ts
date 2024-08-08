/* tslint:disable */
/* eslint-disable */
import { City } from '../models/city';
import { ErrorCode } from '../models/error-code';
export interface GetCityQueryResult {
  city?: City;
  errorCode?: ErrorCode;
  errors?: Array<string> | null;
  isSuccess?: boolean;
}
