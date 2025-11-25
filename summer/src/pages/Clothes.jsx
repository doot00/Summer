import { SlArrowRight } from "react-icons/sl";

export default function Clothes() {
    
    return (
            <section className="flex justify-center border-b border-gray-300 m-7">
                <div className="flex mb-7 text-gray-600" style={{ fontFamily: "proSlim_regular, sans-serif" }}>
                    <p className="mr-5 text-lg">Clothes</p>
                    <SlArrowRight className="text-lg ml-5 mr-5 mt-1" />
                    <p className="ml-5 mr-5 text-lg">아우터</p>
                    <p className="ml-5 mr-5 text-lg">티셔츠</p>
                    <p className="ml-5 text-lg">원피스</p>
                </div>
            </section>
    )
}


