"use client";

import { useState } from "react";

export const CartCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        {/* Boton disminuir */}
        <button
          onClick={() => decrease()}
          id="btn-disminuir"
          className="
         flex items-center justify-center p-2 rounded-xl bg-gray-900
         text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ">
          -1
        </button>

        {/* Boton aumentar */}
        <button
          onClick={() => increase()}
          id="btn-aumentar"
          className="
         flex items-center justify-center p-2 rounded-xl bg-gray-900
         text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ">
          +1
        </button>
      </div>
    </>
  );
};
