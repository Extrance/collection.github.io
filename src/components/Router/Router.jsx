import {
  Navigate,
  createHashRouter,
} from "react-router-dom";

import Layout from "../Layout";
import ErrorPage from "../Error/ErrorPage";

import Home from "../Home/Home";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <Navigate to="/Home" />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
