import Products from "../components/Products";
import { SlArrowRight } from "react-icons/sl";

export default function Food() {
    return (
        <>
            <section className="flex justify-center border-b border-gray-300 m-7">
                            <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                <p className="mr-5 text-lg">Food</p>
                                <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                                <p className="ml-5 mr-5 text-lg">사료</p>
                                <p className="ml-5 mr-5 text-lg">간식</p>
                            </div>
            </section>
            <Products/>
        </>
    )

}