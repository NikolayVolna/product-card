import React, { useState } from "react";

import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";

import type { IProduct } from "../data/products";
import { useProducts } from "../hooks/products";

const ProductPage = () => {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  return (
    <div className="grid gap-2 bg-white py-3 text-black">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="buttom-5 fixed right-5 rounded-full bg-green-500 px-4 py-2 text-2xl text-white hover:bg-green-700"
        onClick={() => setModal(true)}>
        +
      </button>
    </div>
  );
};
export default ProductPage;
