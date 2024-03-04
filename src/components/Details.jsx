import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useContext(ProductContext);

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setDetail(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const navigate = useNavigate();

  function handleDelete(id) {
    const filterProduct = products.filter((p) => p.id !== parseInt(id));
    setProducts(filterProduct);
    navigate("/");
    toast.success("Item Deleted Successfully");
  }

  useEffect(() => {
    // getSingleProduct();
    if (!detail) {
      setDetail(products.filter((item) => item.id == id));
    }
  }, [id]);
  // console.log(detail);
  return (
    <div className="w-[70%] flex h-full justify-between m-auto p-[10%]">
      <img
        src={detail && detail[0].image}
        alt=""
        className="object-contain h-[80%] w-[40%]"
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{detail && detail[0].title}</h1>
        <h3 className="text-zinc-400 my-5">men's clothing</h3>
        <h2 className="text-red-300">$ 109.85</h2>
        <p className="mb-[5%]">{detail && detail[0].description}</p>
        <Link className="py-2 mr-1 px-5 border rounded border-blue-200 text-blue-300 hover:border-blue-400 hover:text-blue-400">
          Edit
        </Link>
        <button
          onClick={() => handleDelete(id)}
          className="py-2 px-5 border rounded border-red-200 text-red-200 hover:border-red-400 hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Details;
