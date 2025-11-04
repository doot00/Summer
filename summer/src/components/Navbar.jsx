import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <Link to="/">
                <h1>Summer</h1>
            </Link>
            <nav>
                <Link to="/allproducts">Products</Link>
                <Link to="/carts">Carts</Link>
                <Link to="/products/new">New</Link>
                <button className="mr-10">Login</button>
            </nav>
        </header>
    )
}