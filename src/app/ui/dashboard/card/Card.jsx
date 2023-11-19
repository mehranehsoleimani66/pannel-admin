import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex bg-[#182237] w-full rounded-md  p-3">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total User</span>
        <span className="text-2xl font-bold">10.234</span>
        <span className="text-xs font-medium">
          <span className="text-lime-500">120%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
