"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between items-center p-3">
      <button
        disabled={!hasPrev}
        className=" cursor-pointer  disabled:cursor-not-allowed disabled:text-gray-500 "
        onClick={() => handleChangePage("prev")}
      >
        Previus
      </button>
      <button
        disabled={!hasNext}
        className="  disabled:cursor-not-allowed disabled:text-gray-500"
        onClick={() => handleChangePage("next")}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
