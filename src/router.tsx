import { createBrowserRouter } from "react-router-dom";
import React from "react";

import App from "./App";
import AuthModule from './modules/Auth/routes';

export default createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  ...AuthModule,
]);
