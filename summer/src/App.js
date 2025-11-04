import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/products/new" element={<NewProduct/>} />
        <Route path="/carts" element={<MyCart/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet/>
    </>
  );
}

export default App;
