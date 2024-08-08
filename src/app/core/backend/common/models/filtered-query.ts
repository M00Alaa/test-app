/* tslint:disable */
/* eslint-disable */
import { FilterOperator } from '../models/filter-operator';
import { FilterType } from '../models/filter-type';
export interface FilteredQuery {
  operator?: FilterOperator;
  propertyName?: string | null;
  type?: FilterType;
  values?: Array<string> | null;
}
