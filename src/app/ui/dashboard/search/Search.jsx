import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex justify-center items-center gap-1 pl-1 bg-[#2e374a] rounded-lg">
      <MdSearch />
      <input
        placeholder={placeholder}
        className="bg-transparent text-[white] p-1"
      />
    </div>
  );
};

export default Search;
