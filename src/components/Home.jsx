import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  console.log(products);

  const category = decodeURIComponent(search.split("=")[1]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    if (!filterProduct || category === "undefined") {
      setFilterProduct(products);
    }
    if (category != "undefined") {
      setFilterProduct(products.filter((p) => p.category === category));
    }
  }, [category, products]);

  return (
    <>
      <Navbar />
      <div className="h-full w-[85%] p-10 pt-[5%] overflow-x-hidden overflow-y-auto flex flex-wrap">
        {filterProduct.length > 0 ? (
          filterProduct.map((p, index) => (
            <Link
              key={index}
              to={`/details/${p.id}`}
              className="w-[18%] mr-2 mb-2 h-[30vh] card p-3 border shadow rounded flex flex-col justify-center item-center"
            >
              <div
                className="mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1>{p.title}</h1>
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Home;
