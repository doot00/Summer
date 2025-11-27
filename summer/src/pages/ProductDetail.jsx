import { useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";


export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price },
    },
  } = useLocation();

  const handleClick = (e) => {
    const product = {id, category, image, title, price, quantity: 1};
    addOrUpdateToCart(uid, product);
  };
  return (
    <>
      <section className="flex flex-col justify-center py-20 md:flex-row p-4">
        <img className="w-[300px] px-4 basis-5/12 bg-cover" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
          <h2 className="text-3xl mb-2 font-bold py-2 border-b border-gray-400">{title}</h2>
          <p className="m-2 p-2 bg-gray-100 rounded-xl text-xl font-bold">{price.toLocaleString()}원</p>
          <p className="m-2 p-2 bg-gray-100 rounded-xl">{description}</p>
            <div
              className="flex items-center m-2 p-2 bg-gray-100 rounded-xl"
            >category : {category}
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
