/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuItem {
    id?: number;
    label?: string;
    icon?: string;
    link?: string;
    subItems?: any;
    parentId?: number;
    isUiElement?: boolean;
    roles?: string[];
}
