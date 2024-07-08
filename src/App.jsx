import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/ProductsPage";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <div className=""></div>
    </div>
  );
};

export default App;
