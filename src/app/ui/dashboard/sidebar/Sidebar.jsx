import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";
import MenuLink from "./menulink/MenuLink";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      }
    ]
  }
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={user.img || "/noavatar.png"}
          alt=""
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <span className="font-medium">{user.username}</span>
          <span className="text-sm text-[#b7bac1]">administratore</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          // mt-1 mb-3
          <li
            className="text-[#b7bac1] font-bold text-xs gap-3"
            key={cat.title}
          >
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <div className="flex justify-center items-center text-white hover:bg-[#2e374a] rounded-md">
          <MdLogout />
          <button className="p-3 w-full mt-1 mb-1  font-bold text-xs flex items-center gap-3 rounded-xl bg-none border-none">
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
