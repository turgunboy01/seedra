import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/ProductsPage";
import Contact from "./pages/contact/Contact";
import CheckoutPage from "./pages/chekout/CheckoutPage";
import CartPage from "./pages/cart/Cart";

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
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
