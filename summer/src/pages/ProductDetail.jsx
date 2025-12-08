import { useLocation } from "react-router-dom";
import useCart from "../components/hooks/useCart";
import { useState } from "react";

export default function ProductDetail() {
  const [success, setSuccess] = useState();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price },
    },
  } = useLocation();

  const handleClick = (e) => {
    const product = { id, category, image, title, price, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <>
      <section className="flex flex-col justify-center py-20 md:flex-row p-4">
        <div className="flex justify-center w-full relative">
          <img
            className={`w-[300px] h-[450px] object-contain px-2 basis-6/12 bg-cover ${
              success ? "opacity-20" : "opacity-100"
            }`}
            src={image}
            alt={title}
          />
          {success && (
            <p className="flex absolute inset-0 items-center justify-center font-bold text-xl">
              ✅ {success}
            </p>
          )}
        </div>
        <div
          className="w-full basis-6/12 flex flex-col p-4"
          style={{ fontFamily: "proSlim_regular, sans-serif" }}
        >
          <h2 className="text-3xl mb-2 font-bold py-2 border-b border-gray-400">
            {title}
          </h2>
          <p className="m-2 p-2 bg-gray-100 rounded-xl text-xl font-bold">
            {price.toLocaleString()}원
          </p>
          <p className="m-2 p-2 bg-gray-100 rounded-xl">{description}</p>
          <div className="flex items-center m-2 p-2 bg-gray-100 rounded-xl">
            category : {category}
          </div>

          <div className="flex justify-center items-center mb-10 mt-5">
            <button
              className="bg-red-500 rounded-2xl p-2 w-[200px] text-white font-bold"
              style={{ fontFamily: "proSlim_regular, sans-serif" }}
              onClick={handleClick}
            >
              장바구니 추가
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
