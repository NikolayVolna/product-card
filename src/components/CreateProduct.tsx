import axios from "axios";
import React, { useState } from "react";

import type { IProduct } from "./../data/products";

import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="mb-2 w-full border py-2 px-4"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="rounded border border-green-500 bg-green-500 py-1 px-2 font-medium hover:bg-green-700">
        Create
      </button>
    </form>
  );
}
