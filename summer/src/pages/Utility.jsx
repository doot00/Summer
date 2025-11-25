import { SlArrowRight } from "react-icons/sl";

export default function Utility() {
    return(
        <>
            <section className="flex justify-center border-b border-gray-300 m-7">
                            <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                                <p className="mr-5 text-lg">Utility</p>
                                <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                                <p className="ml-5 mr-5 text-lg">목욕</p>
                                <p className="ml-5 mr-5 text-lg">위생</p>
                                <p className="ml-5 mr-5 text-lg">가방</p>
                                <p className="ml-5 mr-5 text-lg">유모차</p>
                                <p className="ml-5 mr-5 text-lg">하우스</p>
                                <p className="ml-5 text-lg">식기</p>
                            </div>
            </section>
        </>
    )
}