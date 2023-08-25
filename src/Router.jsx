import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Learing from "./pages/Learning";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "about_us",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "learning",
        element: <Learing />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
