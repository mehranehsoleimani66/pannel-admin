import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
const UserPage = () => {
  return (
    <div className="p-5 bg-[#182237] mt-5 ml-5 mr-5 rounded-xl">
      <div className="flex items-center justify-between">
        <Search placeholder="search a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 text-[#b7bac1] bg-[#5d57c9] border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center  gap-5">
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Jojn Doe
              </div>
            </td>
            <td>John@gmail.com</td>
            <td>2023.08.06</td>
            <td>Admin</td>
            <td>Active</td>
            <td className="flex gap-3">
              <Link href="/dashboard/users/test">
                <button className="bg-[teal] pt-2 pb-3 text-center pr-3 pl-3 rounded-md text-white border-none cursor-pointer">
                  Veiw
                </button>
              </Link>
              <button className="bg-[crimson] pt-2 pb-2 pr-3 pl-3 text-center rounded-md text-white border-none cursor-pointer">
                Delet
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
