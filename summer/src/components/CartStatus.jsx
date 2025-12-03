
import useCart from "./hooks/useCart";

export default function CartStatus() {
    const { cartQuery } = useCart();
    const products = cartQuery?.data;

    
    return (
        <>
            <div className="relative">
                Carts
                <p className="w-5 h-5 flex items-center justify-center bg-red-500 text-white font-bold rounded-full absolute -top-1 -right-4 text-[16px]">
                    {products?.length}
                </p>
            </div>
        </>
    )
}