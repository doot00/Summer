import { FaPlus, FaMinus } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

const ICON_CLASS = "transition-all cursor-pointer hover:scale-105 mx-2";
export default function CartItem({product, product: {id, image, title, category, price, quantity}, uid}) {

    const handlePlus = () => {
        addOrUpdateToCart(uid, {...product, quantity: quantity + 1});
    }
    const handleMinus = () => {
        if(quantity<2) return;
        addOrUpdateToCart(uid, {...product, quantity: quantity - 1});
    }
    const handleDelete = () => removeFromCart(uid, id);
    return (
        <>
            <li className="flex justify-between items-center p-10 border rounded-xl p-2 m-2">
                <input className="mx-5" type="checkbox" />
                <div className="flex-1 flex justify-between items-center mx-5">
                <img className='w-24 md:w-48 rounded-lg mx-5'src={image} alt={title} />
                    <div className="basis-3/5 mx-10">
                        <p className="text-lg">{title}</p>
                        <p className="text-xl">{category}</p>
                        <p className="text-xl font-bold">{price.toLocaleString()}</p>
                    </div>
                    <div className="text-xl flex items-center mx-2 mr-10">
                        <FaMinus className={ICON_CLASS} onClick={handleMinus}/>
                        <span className="text-2xl mx-2">{quantity}</span>
                        <FaPlus className={ICON_CLASS} onClick={handlePlus}/>
                    </div>
                    <div className="text-xl mx-5 flex items-center">
                        <CgCloseR className="transition-all cursor-pointer hover:scale-105 text-2xl" onClick={handleDelete} />
                    </div>
                </div>
            </li>
            
        </>
    )
}