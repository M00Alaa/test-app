/* tslint:disable */
/* eslint-disable */
import { ApplicationUser } from '../models/application-user';
import { Elite } from '../models/elite';
export interface Qualification {
  createdBy?: ApplicationUser;
  createdById?: string | null;
  createdDate?: string;
  elites?: Array<Elite> | null;
  id?: string;
  modifiedBy?: ApplicationUser;
  modifiedById?: string | null;
  modifiedDate?: string;
  name: string;
}
