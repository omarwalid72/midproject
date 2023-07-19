import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home'
import Html from './pages/html';
import Css from './pages/css';
import Java from './pages/java';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <h1>sorroy!!!!!!!!!!!!!!!!!</h1>,
  },
  {
    path: "/html",
    element:<Html/>,
    errorElement: <h1>sorroy!!!!!!!!!!!!!!!!!</h1>,
  },
  {
    path: "/css",
    element:<Css/>,
    errorElement: <h1>sorroy!!!!!!!!!!!!!!!!!</h1>,
  },{
    path: "/java",
    element:<Java/>,
    errorElement: <h1>sorroy!!!!!!!!!!!!!!!!!</h1>,
  },
  
]);
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 
