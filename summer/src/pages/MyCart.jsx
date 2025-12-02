import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/firebase"
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";

const SHIPPING = 3500;
export default function MyCart() {
    const { uid } = useAuthContext();
    const { isLoading, data: products } = useQuery({ queryKey: ['carts', uid], queryFn: () => getCart(uid), enabled: !!uid,});
    
    if(isLoading) return <p>Loading...</p>
    const hasProducts = products && products.length > 0; // 쇼핑카트의 아이템이 1이상일 경우
    const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);
    
    return (
        <section>
            <h1 className="flex justify-center items-center m-10 text-4xl" style={{ fontFamily: "Cafe24Meongi, sans-serif" }}>
                Carts
            </h1>
            <div style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
                {hasProducts && (
                    <section className="flex justify-between items-center mb-10 p-10 gap-x-5">
                        <ul className="w-5/6 p-5 border rounded-2xl">
                            <li className="flex text-2xl m-5">
                                <input className="scale-150" type="checkbox" />
                                <p className="flex ml-5">전체상품주문</p>
                            </li>
                            {products && products.map((product) => (
                            <CartItem key={product.id} product={product} uid={uid}/>))}
                            <p className="flex border rounded-xl bg-gray-100 p-2 m-2 mt-5 justify-center text-xl">상품 금액 {totalPrice.toLocaleString()} + 배송비 3,500 = 상품총금액 {(totalPrice+SHIPPING).toLocaleString()}</p>
                        </ul>
                        <div className="h-1/6 justify-between border rounded-2xl p-8 text-lg">
                            <h2 className="text-2xl mb-2">결제예정금액</h2>
                            <p className="mb-2">상품 금액 : {totalPrice.toLocaleString()}</p>
                            <p className="mb-2">배송액 : 3,500</p>
                            <p className="mb-2">수량 : </p>
                            <p className="mb-5">상품총금액 : {(totalPrice+SHIPPING).toLocaleString()}</p>
                            <button className="bg-red-500 rounded-2xl p-2 w-[200px] text-white font-bold">주문하기</button>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}