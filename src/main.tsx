import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Category from "./pages/category.tsx";
import Categories from "./pages/categories.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import NotFound from "./pages/404.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
