/* tslint:disable */
/* eslint-disable */
export interface UpdateUserCommand {
  email?: string | null;
  id: string;
  name: string;
  phoneNumber?: string | null;
  roles?: Array<string> | null;
}
