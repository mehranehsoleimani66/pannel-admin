import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <button
        disabled
        className=" pr-[10px] pl-[10px] pt-[5px] pb-[5px] cursor-not-allowed bg-gray-500 text-black "
      >
        Previus
      </button>
      <button className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] cursor-pointer bg-gray-200 text-black ">
        next
      </button>
    </div>
  );
};

export default Pagination;
