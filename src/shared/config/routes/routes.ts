import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';
import type { AppRoutes } from '@/shared/types/appRoutes';

export const APP_ROUTES: AppRoutes[] = [
  {
    path: APP_PATHS.HOME,
    name: APP_PAGE_NAMES.HOME,
    meta: {
      showInNavigateMenu: false,
      title: APP_PAGE_NAMES.HOME,
    },
  },
  {
    path: APP_PATHS.LOGIN,
    name: APP_PAGE_NAMES.LOGIN,
    meta: {
      showInNavigateMenu: false,
      title: APP_PAGE_NAMES.LOGIN,
    },
  },
  {
    path: APP_PATHS.REGISTER,
    name: APP_PAGE_NAMES.REGISTER,
    meta: {
      showInNavigateMenu: false,
      title: APP_PAGE_NAMES.REGISTER,
    },
  },
  {
    path: APP_PATHS.NOT_FOUND,
    name: APP_PAGE_NAMES.NOT_FOUND,
    meta: {
      showInNavigateMenu: false,
      title: APP_PAGE_NAMES.NOT_FOUND,
    },
  },
  {
    path: APP_PATHS.CATALOG,
    name: APP_PAGE_NAMES.CATALOG,
    meta: {
      showInNavigateMenu: true,
      title: APP_PAGE_NAMES.CATALOG,
    },
  },
  {
    path: APP_PATHS.CART,
    name: APP_PAGE_NAMES.CART,
    meta: {
      showInNavigateMenu: true,
      title: APP_PAGE_NAMES.CART,
    },
  },
];
