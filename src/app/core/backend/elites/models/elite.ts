/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { Category } from '../models/category';
import { City } from '../models/city';
import { Qualification } from '../models/qualification';
export interface Elite {
  bestAchievement?: string | null;
  category?: Category;
  categoryId?: string | null;
  city?: City;
  cityId?: string;
  createdBy?: ApplicationUser;
  createdById?: string | null;
  createdDate?: string;
  email?: string | null;
  id?: string;
  modifiedBy?: ApplicationUser;
  modifiedById?: string | null;
  modifiedDate?: string;
  name: string;
  notes?: string | null;
  phoneNumber?: string | null;
  position?: string | null;
  qualification?: Qualification;
  qualificationId?: string | null;
  socialUrl?: string | null;
  workplace?: string | null;
}
