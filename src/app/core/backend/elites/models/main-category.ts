/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { Category } from '../models/category';
export interface MainCategory {
  categories?: Array<Category> | null;
  createdBy?: ApplicationUser;
  createdById?: string | null;
  createdDate?: string;
  id?: string;
  modifiedBy?: ApplicationUser;
  modifiedById?: string | null;
  modifiedDate?: string;
  name?: string | null;
}
