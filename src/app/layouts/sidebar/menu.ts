import { ROLES } from 'src/app/app-const';
// import { ApplicationUserType } from 'src/app/core/backend/common/models';
import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  // ?? PMO
  {
    id: 2,
    label: 'الرئيسية',
    icon: ' aya-home ',
    link: '/pmo',
    exact: true,
    roles: [ROLES.Admin, '1', '2'],
  },
  // {
  //     id: 2,
  //     label: 'الهيكل الإداري',
  //     icon: ' aya-medal ',
  //     link: '/pmo/management-structure',
  //     roles: [ROLES.Admin]
  // },
  {
    id: 2,
    label: 'إدارة الشركات',
    icon: ' aya-brieface ',
    link: '/pmo/company-management',
    roles: [ROLES.Admin],
    subItems: [
      {
        label: 'عرض الشركات',
        icon: ' aya-brieface ',
        link: '/pmo/company-management',
        exact: true,
      },
    ],
  },
  {
    id: 2,
    label: 'المشاريع',
    icon: 'aya-layers',
    exact: false,
    // roles: [ROLES.Admin],
    subItems: [
      {
        label: 'إضافة مشروع',
        icon: ' aya-brieface ',
        link: '/pmo/projects/new',
        // roles: [ROLES.Admin, ApplicationUserType.Contractor, ApplicationUserType.Consultative]
      },
      {
        label: 'جميع المشاريع',
        icon: ' aya-brieface ',
        link: '/pmo/projects',
        queryParams: { type: 'All' },
        // roles: [ROLES.Admin, '1',ApplicationUserType.Employee],
        exact: true,
      },
      {
        label: 'مشاريع لم يتم طرحها',
        icon: ' aya-brieface ',
        link: '/pmo/projects',
        queryParams: { type: 'NotLaunched' },
        // roles: [ROLES.Admin, '1',ApplicationUserType.Employee],
        exact: true,
      },
      {
        label: 'المشاريع المطروحة',
        icon: ' aya-brieface ',
        link: '/pmo/projects',
        queryParams: { type: 'Launched' },
        // roles: [ROLES.Admin, '1',ApplicationUserType.Employee],
        exact: true,
      },
      {
        label: 'مشاريع قيد التنفيذ',
        icon: ' aya-brieface ',
        link: '/pmo/projects',
        queryParams: { type: 'Contracted' },
        exact: true,
      },
    ],
  },
  {
    id: 2,
    label: 'الإعدادات',
    icon: 'aya-setting',
    roles: [ROLES.Admin],
    subItems: [
      {
        label: 'وحدات القياس',
        link: '/pmo/settings/units',
        exact: true,
      },
    ],
  },
  // {
  //     id: 2,
  //     label: 'إدارة المستخدمين',
  //     icon: ' aya-users ',
  //     link: '/pmo/users',
  //     roles: [ROLES.Admin]
  // },
];
