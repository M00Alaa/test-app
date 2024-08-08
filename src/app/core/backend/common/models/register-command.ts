/* tslint:disable */
/* eslint-disable */
export interface RegisterCommand {
  email: string;
  name: string;
  password: string;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
}
