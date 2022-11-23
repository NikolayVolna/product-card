import React, { useState } from "react";

import { Product } from "./Product";

import { products } from "./../data/products";

import { CreateProduct } from "./CreateProduct";
import { Modal } from "./Modal";

function Cards() {
  const [modal, setModal] = useState(false);

  return (
    <div className="grid gap-2 bg-white py-3 text-black">
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProduct />
        </Modal>
      )}
      <button
        className="buttom-5 fixed right-5 rounded-full bg-green-500 px-4 py-2 text-2xl text-white hover:bg-green-700"
        onClick={() => setModal(true)}>
        +
      </button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
export default Cards;
