import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider, useLoaderData } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlockPage from "./Components/Block/BlockPage/BlockPage";
import reportWebVitals from "./reportWebVitals";
import { getEthBlockByID, getEthBlockNumber } from "./Logic/Request";
import ErrorPage from "./Components/Error/ErrorPage/ErrorPage";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Navigate to="block/latest"/>
		},
		{
			path: "/block",
			element: <Navigate to="/latest"/>
		},
		{
			path: "/block/:id",
			element: <BlockPage />,
			loader: async ({ params }) => {
				return getEthBlockByID(parseInt(params.id));
			},
			errorElement: <ErrorPage />,
		},
		{
			path: "/block/latest",
			element: <LatestReroute/>,
			loader: async () => {
				return getEthBlockNumber();
			},
		},
	]
);

function LatestReroute() {
	const loader = useLoaderData();
	return (<Navigate to={`../${parseInt(loader.result,16)}`}  relative="path"/>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
