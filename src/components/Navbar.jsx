import React, { useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Navbar() {
  const [products] = useContext(ProductContext);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()})`;
  };

  let distinct =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct = [...new Set(distinct)];
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <Link
        to="/create"
        className="py-3 px-5 border rounded border-blue-200 text-blue-300 hover:shadow-md"
      >
        Add Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="w-[80%] text-2xl mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {distinct.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            key={i}
            className="flex items-center mb-3"
          >
            <span
              className="rounded-full mr-2 w-[15px] h-[15px]"
              style={{ backgroundColor: color() }}
            ></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
