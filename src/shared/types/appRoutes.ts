export interface AppRoutes {
  path: string;
  name: string;
  meta: {
    showInNavigateMenu: boolean;
    requiresAuth?: boolean;
    title: string;
  };
}
