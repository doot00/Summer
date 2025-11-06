import { Link } from "react-router-dom"
import { LuSquareMenu } from "react-icons/lu";
import '../App.css'

export default function Navbar() {
    return (
        <header className="flex justify-between border-b border-gray-300 p-1">
            <div className="flex items-center text-4xl">
                <p className="text-gray">
                    <LuSquareMenu strokeWidth={0.8} />
                </p>
                <Link to="/" className="ml-3" style={{ fontFamily: 'Cafe24Meongi, sans-serif'}}>
                    Summer
                </Link>
            </div>
            <nav className="flex items-center gap-5 m-5" style={{ fontFamily: 'Cafe24Meongi, sans-serif', fontSize: '2rem'}}>
                <Link to="/allproducts">Products</Link>
                <Link to="/carts">Carts</Link>
                <Link to="/products/new">New</Link>
                <button className="p-1 bg-red-500 text-white rounded-2xl">Login</button>
            </nav>
        </header>
    )
}