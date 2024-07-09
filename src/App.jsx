import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsPage from "./pages/products/ProductsPage";
import Contact from "./pages/contact/Contact";
import CheckoutPage from "./pages/chekout/CheckoutPage";
import CartPage from "./pages/cart/Cart";
import Header from "./components/home/Header";
import Footer from "./components/footer/Footer";

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
      <Header />
      <div className="pt-[80px]">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
