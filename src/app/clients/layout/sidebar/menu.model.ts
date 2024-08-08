/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: MenuItem[];
  isTitle?: boolean;
  badge?: any;
  roles?: string[];
  parentId?: number;
  isLayout?: boolean;
  exact?: boolean;
  img?: string;
}
