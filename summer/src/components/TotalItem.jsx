const SHIPPING = 3500;
export default function TotalItem() {
    return (
        <>
            <div>
                <PriceCard text="상품 총액" price={totalP}></PriceCard>
            </div>
        </>
    )
}