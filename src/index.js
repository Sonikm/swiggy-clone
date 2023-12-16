import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={AppRouter}/>
  </React.StrictMode>
);

