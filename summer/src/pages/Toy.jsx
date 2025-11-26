import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../api/firebase";
import "../components/css/button.css";
import { useQuery } from "@tanstack/react-query";

export default function Toy() {
  const [category, setCategory] = useState("fabric");
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const filteredProducts =
    products?.filter((product) =>
      category === "toy"
        ? product.category === "toy"
        : Array.isArray(product.options) && product.options.includes(category)
    ) ?? [];

  return (
    <>
      <div className="flex justify-center border-b border-gray-300 m-7">
        <div
          className="flex mb-7 text-gray-600"
          style={{ fontFamily: "proSlim_regular, sans-serif" }}
        >
          <button className="menu__button" onClick={() => setCategory("toy")}>
            All
          </button>
          <SlArrowRight className="menu__arrow" />
          <button
            className="menu__button"
            onClick={() => setCategory("fabric")}
          >
            Fabric
          </button>
          <button className="menu__button" onClick={() => setCategory("ball")}>
            Ball
          </button>
          <button
            className="menu__button"
            onClick={() => setCategory("nosework")}
          >
            Nosework
          </button>
        </div>
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-4 p-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  );
}
