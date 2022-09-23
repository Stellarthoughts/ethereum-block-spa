import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './Block';
import reportWebVitals from './reportWebVitals';
import { getEthBlockByID, getEthBlockLatest } from './Logic/Request';

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <App/>,
    loader: async ({params}) => {
      return getEthBlockByID(params.id);
    }
  },
  {
    path: "/latest",
    element: <App/>,
    loader: async () => {
      return getEthBlockLatest();
    }
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
