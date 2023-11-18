"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Link
        href={item.path}
        className={`flex  p-5 items-center gap-3  rounded-xl mt-1 mb-1 ${
          pathname === item.path ? "bg-[#2e374a]" : ""
        } hover:bg-[#2e374a]`}
      >
        {item.icon}
        {item.title}
      </Link>
    </div>
  );
};

export default MenuLink;