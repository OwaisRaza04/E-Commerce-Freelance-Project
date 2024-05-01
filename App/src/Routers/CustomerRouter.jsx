import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../customer/components/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails' 
import Checkout from "../customer/components/Checkout/Checkout";
import MyOrders from "../customer/components/MyOrders/MyOrders";
import OrderSummary from "../customer/components/Checkout/OrderSummary";
import OrderTrack from "../customer/components/OrderTrack/OrderTrack";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/myorders" element={<MyOrders />}></Route>
        <Route path="/orderdetails/:id" element={<OrderTrack />}></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
