import { Login } from '../pages/Login/index';
import { Home } from '../pages/Home/index';
import { Dashboard } from '../pages/Dashboard/index';

export const ROUTES = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/dashboard', component: Dashboard },
];
