import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-center items-center  mt-[130px]  ">
      <div className="bg-white box-shadow rounded-lg p-6 w-2/3 max-w-none relative">
        <h1 className="text-center text-xl  font-semibold mb-4">
          Farmer Organization Marketing Solution
        </h1>

        <ul className="space-y-3 text-blue-600 text-lg list-disc pl-5">
          <li className="break-words">
            <a href="#address"> Address</a>
          </li>
          <li>
            <a href="#add-product">Add Product Supply</a>
          </li>
          <li>
            <a href="#view-product"> View Product Supply</a>
          </li>
          <li>
            <a href="#my-product"> My Product Supply</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
