"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between p-3 m-5 rounded-xl items-center bg-[#182237]">
      <div className="font-bold text-[#b7bac1] capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center justify-between gap-3 p-3 rounded-xl">
        <div className="flex justify-center items-center gap-1 pl-1 bg-[#2e374a] rounded-lg">
          <MdSearch />
          <input
            placeholder="search..."
            className="bg-transparent text-[white]"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
