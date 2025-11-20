import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AllProducts from "./pages/AllProducts";
import { AuthContextProvider } from "./components/context/AuthContext";
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route
          path="/products/new"
          element={
            <ProtectedRoute requireAdmin>
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/carts"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
