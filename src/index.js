import React from 'react';
import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import router from './utils/Router';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
  </>
);