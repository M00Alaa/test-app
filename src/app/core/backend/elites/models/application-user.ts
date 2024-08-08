/* tslint:disable */
/* eslint-disable */
export interface ApplicationUser {
  createdDate?: string;
  email?: string | null;
  emailConfirmed?: boolean;
  id?: string | null;
  lockoutEnabled?: boolean;
  lockoutEnd?: string | null;
  modifiedDate?: string;
  name: string;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  userName?: string | null;
}
