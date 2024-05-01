import React from "react";

const OrderFilter = () => {
  const OrderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  return (
    <div className="p-5 border shadow-md rounded-s-md">
      <p className="font-bold">Filters</p>

      <p className="mt-5 font-semibold">ORDER STATUS</p>
      {OrderStatus.map((option) => (
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            defaultChecked={option.value}
            className="w-4 h-4 text-indigo-600 border-gray-300 cursor-pointer focus:ring-indigo-500"
          />
          <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default OrderFilter;
