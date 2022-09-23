import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockPage from './Components/Block/BlockPage/BlockPage';
import reportWebVitals from './reportWebVitals';
import { getEthBlockByID, getEthBlockLatest } from './Logic/Request';
import ErrorPage from './Components/Error/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <BlockPage/>,
    loader: async ({params}) => {
      return getEthBlockByID(params.id);
    },
    errorElement: <ErrorPage/>,
  },
  {
    path: "/latest",
    element: <BlockPage/>,
    loader: async () => {
      return getEthBlockLatest();
    },
    errorElement: <ErrorPage/>,
  }
], {basename: "/block"});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
