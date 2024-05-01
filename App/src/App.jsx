import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/components/Pages/HomePage/HomePage'
import Product from './customer/components/Product/Product'
import Footer from './customer/components/Footer/Footer'
import './App.css'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'
import MyOrders from './customer/components/MyOrders/MyOrders'
import OrderTrack from './customer/components/OrderTrack/OrderTrack'
import CustomerRouter from './Routers/CustomerRouter'

function App() {

  return (
    <div className=''> 
      <Routes>
        <Route path='/*' element={<CustomerRouter />} />
      </Routes>

    </div>
  )
}

export default App
