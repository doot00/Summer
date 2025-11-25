import { Link } from "react-router-dom"
import { LuSquareMenu } from "react-icons/lu";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
    const {user, login, logout} = useAuthContext();
    return (
        <header className="flex justify-between border-b border-gray-300 p-1">
            <div className="flex items-center text-3xl">
                <Link to="/" className="ml-3" style={{ fontFamily: 'Cafe24Meongi, sans-serif'}}>
                    Summer
                </Link>
            </div>
            <nav className="flex items-center gap-5 m-1 text-2xl" style={{ fontFamily: 'Cafe24Meongi, sans-serif'}}>
                <Link to="/clothes">Clothes</Link>
                <Link to="/food">Food</Link>
                <Link to="/utility">Utility</Link>
                <Link to="/supplement">Supplement</Link>
                {user && <Link to="/carts">Carts</Link>}
                {user && user.isAdmin && (
                    <Link to="/products/new">New</Link>
                )}
                {!user && <button className="p-1 bg-red-500 text-white rounded-2xl" onClick={login}>Login</button>}
                {user && <button className="p-1 bg-red-500 text-white rounded-2xl" onClick={logout}>Logout</button>}
                <button className="text-gray text-4xl">
                    <LuSquareMenu strokeWidth={0.7} />
                </button>
            </nav>
        </header>
    )
}