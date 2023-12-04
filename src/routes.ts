// pages
import { Board } from './pages';
// import { UnderConstruction } from './pages';

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
    key: 'home-route',
    title: 'home',
    path: '/',
    needsLogin: true,
    component: Board,
  },
];
