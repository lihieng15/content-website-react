import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Admissions from "./pages/Admissions.jsx";
import Programs from "./pages/Programs.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import Resource from "./pages/Resource.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admissions",
        element: <Admissions />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/resource", element: <Resource /> },
      // {
      //   path: "/contents/:id",
      //   element: <SingleBlog />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/blogs/${params.id}`),
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
