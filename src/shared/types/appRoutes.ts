export interface AppRoutes {
  path: string;
  name: string;
  meta: {
    showInNavigateMenu: boolean;
    title: string;
  };
}
