import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';

import DefaultLayout from './layouts/DefaultLayout/default-layout';

import router from './router';
import { store } from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DefaultLayout>
        <RouterProvider router={router}/>
      </DefaultLayout>
    </Provider>
  </React.StrictMode>
);
