import { useState } from "react";
import CartItem from "../components/CartItem";
import useCart from "../components/hooks/useCart";

const SHIPPING = 3500;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();
  const [checkItems, setCheckItems] = useState({});

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0; // 쇼핑카트의 아이템이 1이상일 경우

  const toggleCheckItem = (id) => {
    setCheckItems((prev) => {
      const newState = { ...prev };
      if (newState[id]) {
        delete newState[id]; // 이미 체크 → 해제
      } else {
        newState[id] = true; // 미체크 → 체크
      }
      return newState;
    });
  };

  const toggleCheckAll = () => {
    setCheckItems((prev) => {
      const allChecked = products.length > 0 && products.every((p) => prev[p.id]);
      const newState = {};
      products.forEach((p) => {
        newState[p.id] = !allChecked;
      });
      return newState;
    });
  };


  const isAllCheckd = products.length > 0 && products.every((p) => checkItems[p.id]);

  // checkbox 선택된 list의 총 가격
  const selectedTotalPrice =
    products &&
    products.reduce((sum, item) => {
      if (checkItems[item.id]) {
        return sum + parseInt(item.price) * item.quantity;
      }
      return sum;
    }, 0);

  return (
    <section>
      <h1
        className="flex justify-center items-center m-10 text-4xl"
        style={{ fontFamily: "Cafe24Meongi, sans-serif" }}
      >
        Carts
      </h1>
      <div style={{ fontFamily: "proSlim_regular, sans-serif" }}>
        {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
        {hasProducts && (
          <section className="flex justify-between items-center mb-10 p-10 gap-x-5">
            <ul className="w-5/6 p-5 border rounded-2xl">
              <li className="flex text-2xl m-2 border-b p-4">
                <input
                  className="scale-150 mr-5"
                  type="checkbox"
                  checked={isAllCheckd}
                  onChange={toggleCheckAll}
                />
                <p className="flex">전체상품주문</p>
              </li>
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  checked={!!checkItems[product.id]}
                  onChange={() => toggleCheckItem(product.id)}
                />
              ))}
              <p className="flex border rounded-xl bg-gray-100 p-2 m-2 mt-5 justify-center text-xl">
                상품 금액 {selectedTotalPrice.toLocaleString()} + 배송비 3,500 =
                상품총금액 {(selectedTotalPrice + SHIPPING).toLocaleString()}
              </p>
            </ul>
            <div className="relative h-1/6 justify-between border rounded-2xl p-5 text-lg overflow-visible">
              <h2 className="sticky top-0 flex justify-center text-2xl mb-3 border-b p-3">
                결제예정금액
              </h2>
              <p className="mb-2">
                상품 금액 : {selectedTotalPrice.toLocaleString()}
              </p>
              <p className="mb-2">배송액 : 3,500</p>
              <p className="mb-5">
                상품총금액 : {(selectedTotalPrice + SHIPPING).toLocaleString()}
              </p>
              <button className="bg-red-500 rounded-2xl p-2 w-[200px] text-white font-bold">
                주문하기
              </button>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
