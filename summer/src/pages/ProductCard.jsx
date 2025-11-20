
export default function ProductCard({product: {id, image, title, category, price },}) {
    return (
        <>
            <li className="rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img className='w-full h-auto relative z-0 transition-all duration-300 hover:scale-110' src={image} alt={title} />
                <div className="m-3">
                    <h3 className="text-lg mb-1">{title}</h3>
                    <p className="font-bold mb-1">{price.toLocaleString()}</p>
                    <p className="text-gray-600">{category}</p>
                </div>
            </li>
        </>
    )
}