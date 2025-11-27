import { useQuery } from "@tanstack/react-query";
import { SlArrowRight } from "react-icons/sl";
import ProductCard from "./ProductCard";
import { useState } from "react";
import '../components/css/button.css'
import { getProducts } from "../api/firebase";

export default function Utility() {
    const [category, setCategory] = useState("bath");
    const { isLoading, error, data: products,} = useQuery({ queryKey: ["products"], queryFn: getProducts,});
    
    const filteredProducts = products?.filter((product) =>
    category === "utility" ? product.category === "utility" : (Array.isArray(product.options) && product.options.includes(category))) ?? []; 

    
    return(
            <>
                <div className="flex justify-center border-b border-gray-300 mt-10 mb-10 w-full">
                                <div className="flex mb-7" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                    <button className="menu__button" onClick={() =>setCategory("utility")}>All</button>
                                    <SlArrowRight className="menu__arrow"/>
                                    <button className="menu__button" onClick={() => setCategory("bath")} >Bath</button>
                                    <button className="menu__button" onClick={() => setCategory("hygiene")}>Hygine</button>
                                    <button className="menu__button" onClick={() => setCategory("bag")}>Bag</button>
                                    <button className="menu__button" onClick={() => setCategory("stroller")}>Stroller</button>
                                    <button className="menu__button" onClick={() => setCategory("house")}>House</button>
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
            </>    
    )
}