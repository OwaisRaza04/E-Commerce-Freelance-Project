import React from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");

  const handleCheckout = (() => {
    navigate('/checkout?step=2');
  })

  return (
    <div>
      <div className="relative grid-cols-3 lg:grid lg:px-16">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>

        <div className="sticky top-0 px-5 h-[100vh] mt-5 lg:mt-5">
          <div className="p-4 border shadow-lg">
            <p className="pb-4 font-bold text-black opacity-60">
              PRICE DETAILS
            </p>

            <hr />

            <div className="flex items-center justify-between mt-4 font-semibold">
              <p>Price (3 items)</p>
              <p>₹4697</p>
            </div>

            <div className="flex items-center justify-between mt-2 font-semibold">
              <p>Discount</p>
              <p className="text-green-600 opacity-80">-₹3419</p>
            </div>

            <div className="flex items-center justify-between mt-2 mb-4 font-semibold">
              <p>Delivery Charge</p>
              <p className="text-green-600 opacity-80">Free</p>
            </div>

            <hr />

            <div className="flex items-center justify-between">
              <p className="mt-4 font-bold text-black ">Total Amount</p>
              <p className="font-semibold text-green-600">₹1278</p>
            </div>

            <button
            onClick={handleCheckout}
              className="w-full mt-8 h-[2.5rem] rounded-sm text-white font-semibold"
              style={{ backgroundColor: "#9155fd" }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
