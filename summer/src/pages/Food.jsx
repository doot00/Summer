import { useQuery } from "@tanstack/react-query";
import { SlArrowRight } from "react-icons/sl";
import { getFoods } from "../api/firebase";
import ProductCard from "./ProductCard";


export default function Food() {
    const {
        isLoading,
        error,
        data: products,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getFoods,
    });
    return (
        <>
            <div className="flex justify-center border-b border-gray-300 m-7">
                            <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                <p className="mr-5 text-lg">Food</p>
                                <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                                <p className="ml-5 mr-5 text-lg">사료</p>
                                <p className="ml-5 mr-5 text-lg">간식</p>
                            </div>
            </div>
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
                <ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-4 p-4">
                    {products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </>
    )

}
