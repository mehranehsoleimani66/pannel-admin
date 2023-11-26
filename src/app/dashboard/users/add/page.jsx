import { addUser } from "@/app/libs/action";

const AddUserPage = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-[10px] m-5">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
          required
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-[30px] bg-[#151c2c] text-[#b7bac1]
          border-2 border-solid border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
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

export default AddUserPage;
