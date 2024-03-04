import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  function handleAdd(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Rest of your code...

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("All fields are required");
      return; // Exit the function early if validation fails
    }

    const product = {
      id: nanoid(),
      title,
      description,
      price,
      category,
      image,
    };

    setProducts([...products, product]);
    navigate("/");
    toast.success("Product Added Successfully");
  }

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add Product</h1>
      <input
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={image}
        type="url"
        placeholder="image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      />
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      />
      <div className="w-1/2 flex justify-between">
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
        />
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
        />
      </div>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        type="text"
        placeholder="enter description here"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
      />
      <div className="w-1/2">
        <button className="py-3 px-5 border rounded border-blue-200 text-blue-300 hover:border-blue-400 hover:text-blue-400">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default Create;
