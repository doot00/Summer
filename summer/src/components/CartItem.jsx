import { FaPlus, FaMinus } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import useCart from "./hooks/useCart";

const ICON_CLASS = "transition-all cursor-pointer hover:scale-105 mx-2";
export default function CartItem({
    product,
    checked,
    onChange,
    product: {id, image, title, category, price, quantity}}) {

    const { addOrUpdateItem, removeItem } = useCart();
    const handlePlus = () => {
        addOrUpdateItem.mutate({...product, quantity: quantity + 1});
    }
    const handleMinus = () => {
        if(quantity<2) return;
        addOrUpdateItem.mutate({...product, quantity: quantity - 1});
    }
    const handleDelete = () => removeItem.mutate(id);

    return (
        <>
            <li className="flex justify-between items-center p-10 border rounded-xl mt-5">
                <div className="flex-1 flex justify-between items-center mx-5">
                    <div className="scale-150 mr-10">
                        <input type="checkbox" checked={checked} onChange={onChange} />
                        <span>{product.name}</span>
                    </div>
                    <img className='w-[80px] w-[80px] rounded-lg mx-5'src={image} alt={title} />
                    <div className="basis-3/5 mx-10">
                        <p className="text-xl">{title}</p>
                        <p className="text-lg">{category}</p>
                        <p className="text-xl font-bold">{price.toLocaleString()}</p>
                    </div>
                    <div className="text-xl flex items-center mx-2 mr-10 border rounded-lg">
                        <FaMinus className={ICON_CLASS} onClick={handleMinus}/>
                        <span className="text-xl px-3 py-1 mb-1 border-l border-r">{quantity}</span>
                        <FaPlus className={ICON_CLASS} onClick={handlePlus}/>
                    </div>
                    <div className="text-xl mx-5 flex items-center">
                        <CgCloseR className="transition -a ll cursor-pointer hover:scale-105 text-2xl" onClick={handleDelete} />
                    </div>
                </div>
            </li>
            
        </>
    )
}