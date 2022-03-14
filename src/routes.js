import Chat from './components/Chat';
import Login from './components/Login';
import { LOGIN_ROUTE, CHAT_ROUTE, ALL_ROUTE } from './utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: ALL_ROUTE,
    Component: Login
  }
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  },
  {
    path: ALL_ROUTE,
    Component: Chat
  }
];