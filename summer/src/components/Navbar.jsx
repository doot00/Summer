import { Link } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";
import SubMenu from "../pages/SubMenu";

export default function Navbar({ isMenuOpen, toggleMenu }) {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-1">
      <div className="flex items-center text-3xl">
        <Link
          to="/"
          className="ml-3"
          style={{ fontFamily: "Cafe24Meongi, sans-serif" }}
        >
          Summer
        </Link>
      </div>
      <nav
        className="flex items-center gap-5 m-1 text-2xl"
        style={{ fontFamily: "Cafe24Meongi, sans-serif" }}
      >
        <Link to="/clothes">Clothes</Link>
        <Link to="/food">Food</Link>
        <Link to="/utility">Utility</Link>
        <Link to="/toy">Toy</Link>
        <Link to="/supplement">Supplement</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && <Link to="/products/new">New</Link>}
        {!user && (
          <button
            className="p-1 bg-red-500 text-white rounded-2xl"
            onClick={login}
          >
            Login
          </button>
        )}
        {user && (
          <button
            className="p-1 bg-red-500 text-white rounded-2xl"
            onClick={logout}
          >
            Logout
          </button>
        )}
        <button className="text-gray text-4xl" onClick={toggleMenu}>
          <LuSquareMenu strokeWidth={0.7} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-full right-0">
            <SubMenu />
          </div>
        )}
      </nav>
    </header>
  );
}
