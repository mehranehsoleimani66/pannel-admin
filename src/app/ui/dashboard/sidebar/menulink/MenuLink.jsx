"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={item.path}
      className={`flex  p-5 mb-1 items-center  rounded-xl  ${
        pathname === item.path ? "bg-[#2e374a]" : ""
      } hover:bg-[#2e374a]`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
