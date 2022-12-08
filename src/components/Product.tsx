import { useState } from "react";

import type { IProduct } from "./../data/products";

interface ProductProps {
  product: IProduct;
}

export function Product(props: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClasses = details
    ? "bg-red-500 hover:bg-red-700 border-red-700 "
    : "bg-blue-500 hover:bg-blue-700 border-blue-700 ";
  const btnClass = [
    "text-white font-bold py-2 px-4 border rounded transition duration-300 ease-in-out",
    btnBgClasses,
  ];

  return (
    <div className="mx-80 flex flex-col items-center rounded border py-2 px-4 ">
      <img
        src={props.product.image}
        className="w-1/6"
        alt={props.product.title}
      />
      <p>{props.product.title}</p>
      <p className="font-bold">{props.product.price}</p>
      <button
        className={btnClass.join(" ")}
        onClick={() => setDetails((show) => !show)}>
        {details ? "Hide text" : "Show text"}
      </button>
      {details && (
        <div>
          <p>{props.product.description} </p>
          <p>
            Rate:{" "}
            <span className="font-bold">{props.product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
