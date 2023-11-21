import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[#182237] p-5 h-max rounded-xl font-bold text-[#b7bac1]">
        <div className="relative w-full h-[300px] overflow-hidden rounded-xl mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Deo
      </div>
      <div className="flex-3 bg-[#182237] p-5 rounded-xl mr-5">
        <form action="" className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Username</label>
          <input
            type="text"
            name="username"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Email</label>
          <input
            type="email"
            name="email"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Password</label>
          <input
            type="password"
            name="password"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Address</label>
          <textarea
            type="text"
            name="address"
            placeholder=""
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          />
          <label className="text-xs">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          >
            <option value={true} selected="">
              Yes
            </option>
            <option value={false} selected="">
              No
            </option>
          </select>
          <label className="text-xs">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 border border-solid border-[#2e374a] rounded bg-[#151c2c] text-white mt-[10px] mb-[10px]"
          >
            <option value={true} selected="">
              Yes
            </option>
            <option value={false} selected="">
              No
            </option>
          </select>
          <button className="w-full p-5 bg-teal-500 border-none rounded-md cursor-pointer mt-5 text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
