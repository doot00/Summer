import { useState } from "react";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";
import Navbar from "../components/Navbar";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]); //첫번째 file만 set 해준다.
      console.log(files[0]); // 제대로 나오는 것을 확인할 수 있다.

      return;
    }
    setProduct((product) => ({ ...product, [name]: value })); //update되는 부분만 setProduct
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 cloudinary에 업로드, url 획득한다.
    // firebase 새로운 제품 추가
    setIsUploading(true); // 버튼 비활성화
    uploadImage(file)
      .then((url) => {
        console.log(url);
        addNewProduct(product, url) // 새로운 제품 등록
          .then(() => {
            setSuccess("성공적으로 제품이 추가되었습니다.");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <>
    <Navbar/>
      <h1
        className="flex justify-center items-center m-10 text-4xl"
        style={{ fontFamily: "Cafe24Meongi, sans-serif" }}
      >
        New Product
      </h1>
      <section className="flex flex-col items-start gap-4">
        <div className="flex justify-center w-full relative">
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="local file"
              className={success ? "opacity-20" : "opacity-100"}
            />
          )}

          {success && (
            <p className="absolute inset-0 flex items-center justify-center font-bold text-xl">
              ✅ {success}
            </p>
          )}
        </div>

        <form
          className="flex flex-col w-full px-10"
          style={{ fontFamily: "proSlim_regular, sans-serif" }}
          onSubmit={handleSubmit}
        >
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="text"
            name="title"
            value={product.title ?? ""}
            placeholder="제품명"
            required
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="number"
            name="price"
            value={product.price ?? ""}
            placeholder="가격"
            required
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="category"
            name="category"
            value={product.category ?? ""}
            placeholder="카테고리"
            required
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="text"
            name="description"
            value={product.description ?? ""}
            placeholder="제품 설명"
            required
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 bg-gray-100 rounded-xl"
            type="text"
            name="options"
            value={product.options ?? ""}
            placeholder="옵션들(콤마(,)로 구분"
            required
            onChange={handleChange}
          />
          <div className="flex justify-center items-center mb-10 mt-5">
            <button
              className="bg-red-500 rounded-2xl p-2 w-[200px] text-white font-bold"
              style={{ fontFamily: "proSlim_regular, sans-serif" }}
              disabled={isUploading}
            >
              {isUploading ? "업로드중..." : "제품 등록하기"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
