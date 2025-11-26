import { useQuery } from "@tanstack/react-query";
import { SlArrowRight } from "react-icons/sl";
import { getFeeds } from "../api/firebase";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function Food() {
    const [category, setCategory] = useState("feed");
    const { isLoading, error, data: products,} = useQuery({ queryKey: ["products"], queryFn: getFeeds,});
    
    const filteredProducts = products?.filter((product) =>     
        Array.isArray(product.options) && product.options.includes(category)) ?? [];

    return (
        <>
            <div className="flex justify-center border-b border-gray-300 m-7">
                            <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                <p className="mr-5 text-lg">Food</p>
                                <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                                <button className="ml-5 mr-5 text-lg" onClick={() => setCategory("feed")} >사 료</button>
                                <button className="ml-5 mr-5 text-lg" onClick={() => setCategory("snack")}>간 식</button>
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
