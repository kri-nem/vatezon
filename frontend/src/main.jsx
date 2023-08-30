import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import HelloMessage from "./pages/HelloMessage";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hello",
        element: <HelloMessage />,
      },
      {
        path: "/home-page",
        element: <Products/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
