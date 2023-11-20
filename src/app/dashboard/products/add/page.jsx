const AddProductPage = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-[10px] m-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <select
          name="cat"
          id="cat"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
          required
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
          required
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full p-5 bg-teal-500 border-none rounded-[5px] text-[#b7bac1]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
