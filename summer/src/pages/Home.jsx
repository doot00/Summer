import EmblaCarousel from "../components/EmblaCarousel";
import AllProducts from "../components/AllProducts";

const OPTIONS = { align: 'start'}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    return (
        <>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <AllProducts/>
        </>
    )
}