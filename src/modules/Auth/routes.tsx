import React from 'react';
import { RouteObject } from 'react-router-dom';

import AuthView from './views/auth-view';

const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthView/>,
  },
];

export default routes;
