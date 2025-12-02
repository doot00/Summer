import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/firebase"
import { useAuthContext } from "../context/AuthContext";
import CartItem from "../components/CartItem";

const SHIPPING = 3500;
export default function MyCart({ }) {
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

            {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
            {hasProducts && (
                <section className="flex justify-between items-center mb-10 p-20">
                    <ul className="w-4/6 p-5 border rounded-2xl">
                        <input className="text-2xl" type="checkbox" /> 전체상품주문
                        {products && products.map((product) => (
                        <CartItem key={product.id} product={product} uid={uid}/>))}
                        <p className="flex border rounded-xl bg-gray-100 p-2 m-2 justify-center text-xl">상품 금액 {totalPrice.toLocaleString()} + 배송비 3,500 = 상품총금액 {(totalPrice+SHIPPING).toLocaleString()}</p>
                    </ul>
                    <div className="h-1/6 justify-center border rounded-2xl p-10 text-xl">
                        <h2 className="text-2xl mb-2">결제예정금액</h2>
                        <p className="mb-2">상품 금액 : {totalPrice.toLocaleString()}</p>
                        <p className="mb-2">배송액 : 3,500</p>
                        <p className="mb-2">수량 : {products.quantity}</p>
                        <p className="">상품총금액 : {(totalPrice+SHIPPING).toLocaleString()}</p>
                    </div>
                </section>
            )}
        </section>
    )
}
