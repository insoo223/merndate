import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import BasicMenu from './cmp/BasicMenu';
import RteFormik from './cmp/RteFormik';
import RteGDLike from './cmp/RteGDLike';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RteLogin from './cmp/RteLogin';

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
  {
    path: "auth/google/",
    element: <RteLogin />,
  },    
  {
    path: "docs/:id",
    element: <RteGDLike />,
  },    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="671892678478-3m5fo3malfb0bkcsk5ic2bf2mmhq2cg3.apps.googleusercontent.com">
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>        
);

