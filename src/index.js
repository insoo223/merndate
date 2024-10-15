import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import BasicMenu from './cmp/BasicMenu';
import RteFormik from './cmp/RteFormik';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Admin1/",
    element: <RteFormik/>,
  },  
  {
    path: "Admin2/",
    element: <BasicMenu />,
  },    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

