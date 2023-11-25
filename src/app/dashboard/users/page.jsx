import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/app/libs/data";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="p-5 bg-[#182237] mt-5 ml-5 mr-5 rounded-xl">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div
                  className="flex items-center 
                    gap-5"
                >
                  <Image
                    src={user?.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td className="flex gap-3">
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className="bg-[teal] pt-2 pb-3 text-center pr-3 pl-3 rounded-md text-white border-none cursor-pointer">
                    Veiw
                  </button>
                </Link>
                <button className="bg-[crimson] pt-2 pb-2 pr-3 pl-3 text-center rounded-md text-white border-none cursor-pointer">
                  Delet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UserPage;
