
import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/firebase"
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
    const { uid } = useAuthContext();
    const { data: products } = useQuery({
        queryKey: ['carts', uid],
        queryFn: () => getCart(uid),
        enabled: !!uid,
    });
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