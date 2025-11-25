import { SlArrowRight } from "react-icons/sl";

export default function Supplement() {
    return (
        <section className="flex justify-center border-b border-gray-300 m-7">
                        <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                            <p className="mr-5 text-lg">Clothes</p>
                            <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                            <p className="ml-5 mr-5 text-lg">유산균</p>
                            <p className="ml-5 mr-5 text-lg">관절</p>
                            <p className="ml-5 mr-5 text-lg">피부</p>
                            <p className="ml-5 mr-5 text-lg">눈</p>
                            <p className="ml-5 mr-5 text-lg">심장</p>
                            <p className="ml-5 text-lg">신장</p>
                        </div>
        </section>
    )
}