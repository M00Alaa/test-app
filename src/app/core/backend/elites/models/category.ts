/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { Elite } from '../models/elite';
import { MainCategory } from '../models/main-category';
export interface Category {
  createdBy?: ApplicationUser;
  createdById?: string | null;
  createdDate?: string;
  elites?: Array<Elite> | null;
  id?: string;
  mainCategory?: MainCategory;
  mainCategoryId?: string | null;
  modifiedBy?: ApplicationUser;
  modifiedById?: string | null;
  modifiedDate?: string;
  name: string;
}
