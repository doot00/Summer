import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../../context/AuthContext"
import { addOrUpdateToCart, getCart, removeFromCart } from "../../api/firebase";

export default function useCart() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient(); // queryClient정의
    // cart 읽어오기 -> uid있는 경우에만 사용자 별로 캐싱을 한다.
    const cartQuery = useQuery({
        queryKey: ['carts', uid || ''],
        queryFn: () => getCart(uid),
        enabled: !!uid,
    });

    const addOrUpdateItem = useMutation({
        mutationFn: (product) => addOrUpdateToCart(uid, product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['carts', uid] });
        },
    });

    const removeItem = useMutation({
        mutationFn: (id) => removeFromCart(uid, id),
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        }
    })
    return { cartQuery, addOrUpdateItem, removeItem };
}