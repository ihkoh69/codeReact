import { upload } from "@testing-library/user-event/dist/upload";
import { useRef, useState } from "react";
import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";


const   initState = {
    pname: '',
    pdesc: '',
    price: 0,
    files: []
}


const AddComponent = () => {

      const [product, setProduct] = useState({...initState});
      const uploadRef = useRef();

      const [fetching, setFetching] = useState(false)
      const [result, setResult] = useState(null);

      const {moveToList} = useCustomMove();

      const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value;
        setProduct({...product});
      }

      const handleClickAdd = async () => {
        // console.log(product);


        const files = uploadRef.current.files;

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
          formData.append("files", files[i]);
        }

        formData.append("pname", product.pname);
        formData.append("pdesc", product.pdesc);
        formData.append("price", product.price);

        console.log(formData);

        setFetching(true);
        try {
          const res = await postAdd(formData);  // ✅ await 필수!
          console.log("✅ 응답 결과:", res);
          setFetching(false);
          setResult(res.result);
        } catch (err) {
          console.error("❌ 등록 중 에러:", err);
        }
    }

    const closeModal = () => {
      setResult(null)
      moveToList({page:1})
    }


  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {fetching ? <FetchingModal /> : <></>}
      {result? <ResultModal
                title={'Product Add Result'}
                content={`${result}번 등록 완료`}
                callbackFn = {closeModal}
               /> : <></>}
        <div className="">

          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
            <input className="w-4/5 p-2 border-2 border-gray-300 rounded shadow-md"
              name="pname"
              type={"text"}
              value={product.pname}
              onChange={handleChangeProduct}
            />     
          </div>

          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">Desc</div>
            <textarea className="w-4/5 p-2 border-2 border-neutral-300 rounded shadow-md resize-y"
              name="pdesc"
              rows="4"
              value={product.pdesc}
              onChange={handleChangeProduct}
            />     
          </div>

          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">Price</div>
            <input className="w-4/5 p-2 border-2 border-gray-300 rounded shadow-md"
              name="price"
              type={"number"}
              value={product.price}
              onChange={handleChangeProduct}
            />     
          </div>

          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">Files</div>
            <input className="w-4/5 p-2 border-2 border-gray-300 rounded shadow-md"
              ref={uploadRef}
              type={"file"}
              multiple={true}
            />     
          </div>

        <div className="flex justify-end">
          <button type = "button" className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
            onClick={handleClickAdd}>
              ADD
          </button>
        </div>
                </div>
    </div>
  )
}

export default AddComponent