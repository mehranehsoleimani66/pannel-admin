import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[#182237] p-5 h-max rounded-xl font-bold text-[#b7bac1]">
        <div className="relative w-full h-[300px] overflow-hidden rounded-xl mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className="flex-3 bg-[#182237] p-5 rounded-xl mr-5">
        <form action="" className="flex flex-col">
          <label className="text-xs">Title</label>
          <input
            type="text"
            name="title"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">price</label>
          <input
            type="number"
            name="price"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">stock</label>
          <input
            type="number"
            name="stock"
            placeholder="56"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">size</label>
          <textarea
            type="number"
            name="size"
            placeholder="size"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          >
            <option value="kitchen" selected="">
              Kitchen
            </option>
            <option value="computer" selected="">
              Computer
            </option>
          </select>
          <label className="text-xs">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="description"
            cols="30"
            rows="10"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          ></textarea>
          <button className="w-full p-5 bg-teal-500 border-none rounded-md cursor-pointer mt-5 text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
