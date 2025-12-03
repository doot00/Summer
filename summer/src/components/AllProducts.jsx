import { useQuery } from "@tanstack/react-query";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import '../components/css/button.css'
import { getProducts } from "../api/firebase";
import ProductCard from "../pages/ProductCard";

export default function AllProducts() {
    const [category, setCategory] = useState("clothes");
    const { isLoading, error, data: products,} = useQuery({ queryKey: ["products"], queryFn: getProducts,});
    
    const filteredProducts = (products ?? []).filter((product) => {
    if (category === "clothes") {
        return product.category === "clothes";
    } else if (category === "food") {
        return product.category === "food";
    } else if (category === "utility") {
        return product.category === "utility";
    } else if (category === "toy") {
        return product.category === "toy";
    } else if (category === "supplement") {
        return product.category === "supplement";
    }
        return true;
    });

    return (
            <section>
                <div className="flex justify-center border-b border-gray-300 mt-20 mb-10 w-full"/>
                <div className="flex justify-center border-b border-gray-300 mt-10 mb-10 w-full">
                                <div className="flex mb-7" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                    <p className="menu__button">Menu</p>
                                    <SlArrowRight className="menu__arrow"/>
                                    <button className="menu__button" onClick={() => setCategory("clothes")} >Clothes</button>
                                    <button className="menu__button" onClick={() => setCategory("food")}>Food</button>
                                    <button className="menu__button" onClick={() => setCategory("utility")}>Utility</button>
                                    <button className="menu__button" onClick={() => setCategory("toy")}>Toy</button>
                                    <button className="menu__button" onClick={() => setCategory("supplement")}>Supplement</button>
                                </div>
                </div>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error.message}</p>}
                    <ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-4 p-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product}  />
                        ))}
                    </ul>
                </div>
            </section>  
        )
}