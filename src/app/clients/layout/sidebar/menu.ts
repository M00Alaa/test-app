import { ROLES } from 'src/app/app-const';
import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: ' الرئيسية',
    icon: ' aya-home ',
    link: '/system-elites/home',
    img: 'assets/images/elites/home-2.svg',
  },
  {
    id: 2,
    label: ' ادارة المدن',
    icon: 'aya-map-pin',
    link: '/system-elites/cities',
    img: 'assets/images/elites/picture-frame.svg',
    roles: [ROLES.Admin],
  },
  {
    id: 3,
    label: ' ادارة المؤهلات',
    icon: ' aya-layers',
    link: '/system-elites/qualifications',
    img: 'assets/images/elites/receipt-item.svg',
    roles: [ROLES.Admin],
  },

  {
    id: 5,
    label: 'إدارة المستخدمين',
    icon: ' aya-users',
    link: '/system-elites/users',
    img: 'assets/images/elites/profile-2user.svg',
    roles: [ROLES.Admin],
  },
  {
    id: 4,
    label: 'ادارة التخصصات',
    icon: ' aya-brieface',
    link: '/system-elites/categories',
    img: 'assets/images/elites/briefcase.svg',
    roles: [ROLES.Admin],
  },
];
