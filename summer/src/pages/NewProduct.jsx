import { useState } from "react"

export default function NewProduct() {
    const [product, setProduct ] = useState({});
    const [file, setFile] = useState();
    const handleChange = (e) => {
        const { name,value, files} = e.target;
        if(name === 'file') {
            setFile(files && files[0]); //첫번째 file만 set 해준다.
        
            return;
        }
        setProduct((product) => ({...product, [name]: value})); //update되는 부분만 setProduct
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // 제품의 사진을 cloudinary에 업로드, url 획득한다.
        // firebase 새로운 제품 추가  
    };

    return (
        <>
            <h1 className="flex justify-center items-center m-10 text-2xl" style={{ fontFamily: 'proSlim_regular, sans-serif'}}>✨ 새로운 제품 등록하기</h1>
            <section className="flex flex-col items-start gap-4">
                <div className="flex justify-center w-full">
                    {file && <img src={URL.createObjectURL(file)} alt='local file'/>}
                </div>
                <form className="flex flex-col w-full m-5" style={{ fontFamily: 'proSlim_regular, sans-serif'}} onSubmit={handleSubmit}>
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type="file" accept="image/*" name='file' required onChange={handleChange} />
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type='text' name="title" value={product.title ?? ''} placeholder="제품명" required onChange={handleChange}/>
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type="number" name="price" value={product.price ?? ''} placeholder="가격" required onChange={handleChange}/>
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type="category" name="category" value={product.category ?? ''} placeholder="카테고리" required onChange={handleChange}/>
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type="text" name="description" value={product.description ?? ''} placeholder="제품 설명" required onChange={handleChange}/>
                    <input className="m-2 p-2 bg-gray-100 rounded-xl" type="text" name="options" value={product.options ?? ''} placeholder="옵션들(콤마(,)로 구분" required onChange={handleChange}/>
                </form>
            </section>
            <div className="flex justify-center items-center mb-10">
                <button className="bg-red-500 rounded-2xl p-2 w-[200px] text-white font-bold" style={{ fontFamily: 'proSlim_regular, sans-serif'}}>제품 등록하기</button>
            </div>
        </>
    )
}