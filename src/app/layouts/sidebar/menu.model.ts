export interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: MenuItem[];
  isTitle?: boolean;
  badge?: unknown;
  queryParams?: { [k: string]: string };
  roles?: string[];
  professions?: string[];
  parentId?: number;
  isLayout?: boolean;
  exact?: boolean;
}
