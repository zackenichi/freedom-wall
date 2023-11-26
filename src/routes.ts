// pages
import { Login, Home } from './pages';

// other
import { FC } from 'react';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  needsLogin: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'login-route',
    title: 'Login',
    path: '/login',
    needsLogin: false,
    component: Login,
  },

  {
    key: 'home-route',
    title: 'Dashboard',
    path: '/',
    needsLogin: true,
    component: Home,
  },
];
