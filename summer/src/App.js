import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Food from "./pages/Food";
import Toy from "./pages/Toy";
import Clothes from "./pages/Clothes";
import Utility from "./pages/Utility";
import Supplement from"./pages/Supplement";
import Navbar from "./components/Navbar";
import './App.css';
import useToggleMenu from "./components/hooks/useToggleMenu";


function App() {
  const { isMenuOpen, toggleMenu } = useToggleMenu(false);
  return (
    <AuthContextProvider>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/food" element={<Food/>} />
        <Route path="/utility" element={<Utility/>}/>
        <Route path="/toy" element={<Toy/>}/>
        <Route path="/supplement" element={<Supplement/>}/>
        <Route path="/products/new"element={<ProtectedRoute requireAdmin><NewProduct /></ProtectedRoute>}/>
        <Route path="/carts" element={<MyCart />}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
