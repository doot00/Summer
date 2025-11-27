import { useNavigate } from "react-router-dom"

export default function ProductCard({product, product: {id, image, title, options, price },}) {
    const navigate = useNavigate();
    return (
        <>
            <li onClick={() => {navigate(`/products/${id}`, {state: { product }})}}className="rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img className='w-full h-[400px] p-10 relative z-0 transition-all duration-300 hover:scale-110' style={{ backgroundColor: "#f7f5f6" }} src={image} alt={title} />
                <div className="m-3">
                    <h3 className="text-lg mb-1">{title}</h3>
                    <p className="font-bold mb-1">{price.toLocaleString()}</p>
                    <p className="text-gray-600">{options}</p>
                </div>
            </li>
        </>
    )
}