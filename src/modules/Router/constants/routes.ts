import * as views from '../views';

export interface AppRoute {
  title: string;
  path?: string;
  component: any;
  exact?: boolean;
  key?: number;
}

export const routes: AppRoute[] = [
  {
    title: 'Homepage',
    path: '/',
    component: views.Homepage,
    exact: true
  },
  {
    title: 'About',
    path: '/about',
    component: views.About,
    exact: true
  },
  {
    title: 'Recipe List',
    path: '/recipes',
    component: views.RecipeListPage,
    exact: true
  },
  {
    title: 'Recipe Page',
    path: '/recipe/:id',
    component: views.RecipePage,
    exact: true
  },
  {
    /**
     * Error page doesn't need to have a route prop, as it is a fallback route
     * Key is set to 999 to ensure this route is rendered last
     */
    title: 'Error 404',
    component: views.Error404,
    key: 999
  }
];
