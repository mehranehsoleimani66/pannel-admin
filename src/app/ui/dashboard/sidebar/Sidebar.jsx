// import Image from "next/image";
// import {
//   MdDashboard,
//   MdSupervisedUserCircle,
//   MdShoppingBag,
//   MdAttachMoney,
//   MdWork,
//   MdAnalytics,
//   MdPeople,
//   MdOutlineSettings,
//   MdHelpCenter,
//   MdLogout
// } from "react-icons/md";
// import MenuLink from "./menulink/MenuLink";
// import { auth, signOut } from "@/app/auth";

// const menuItems = [
//   {
//     title: "Pages",
//     list: [
//       {
//         title: "Dashboard",
//         path: "/dashboard",
//         icon: <MdDashboard />
//       },
//       {
//         title: "Users",
//         path: "/dashboard/users",
//         icon: <MdSupervisedUserCircle />
//       },
//       {
//         title: "Products",
//         path: "/dashboard/products",
//         icon: <MdShoppingBag />
//       },
//       {
//         title: "Transactions",
//         path: "/dashboard/transactions",
//         icon: <MdAttachMoney />
//       }
//     ]
//   },
//   {
//     title: "Analytics",
//     list: [
//       {
//         title: "Revenue",
//         path: "/dashboard/revenue",
//         icon: <MdWork />
//       },
//       {
//         title: "Reports",
//         path: "/dashboard/reports",
//         icon: <MdAnalytics />
//       },
//       {
//         title: "Teams",
//         path: "/dashboard/teams",
//         icon: <MdPeople />
//       }
//     ]
//   },
//   {
//     title: "User",
//     list: [
//       {
//         title: "Settings",
//         path: "/dashboard/settings",
//         icon: <MdOutlineSettings />
//       },
//       {
//         title: "Help",
//         path: "/dashboard/help",
//         icon: <MdHelpCenter />
//       }
//     ]
//   }
// ];

// const Sidebar = async () => {
//   const { user } = await auth();
//   console.log(user, "user");
//   return (
//     <div className="sticky top-10">
//       <div className="flex items-center gap-5 mb-5">
//         <Image
//           src={user.img || "/noavatar.png"}
//           alt=""
//           width={50}
//           height={50}
//           className="rounded-full object-cover"
//         />
//         <div className="flex flex-col ">
//           <span className="font-medium">{user.username}</span>
//           <span className="text-sm text-[#b7bac1]">administratore</span>
//         </div>
//       </div>
//       <ul className="list-none">
//         {menuItems.map((cat) => (
//           // mt-1 mb-3
//           <li
//             className="text-[#b7bac1] font-bold text-xs gap-3"
//             key={cat.title}
//           >
//             <span>{cat.title}</span>
//             {cat.list.map((item) => (
//               <MenuLink item={item} key={item.title} />
//             ))}
//           </li>
//         ))}
//       </ul>
//       <form
//         action={async () => {
//           "use server";
//           await signOut();
//         }}
//       >
//         <div className="flex justify-center items-center text-white hover:bg-[#2e374a] rounded-md">
//           <MdLogout />
//           <button className="p-3 w-full mt-1 mb-1  font-bold text-xs flex items-center gap-3 rounded-xl bg-none border-none">
//             Logout
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import styles from "./sidebar.module.css";
import MenuLink from "./menulink/MenuLink";
import Image from "next/image";
import Link from "next/link";

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
import { usePathname } from "next/navigation";

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

function Sidebar() {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className="rounded-full object-cover w-10 h-10"
          src="data:image/jpeg;base64,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"
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Mehiii_Dev</span>
          <span className={styles.userTitle}>Adminstrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>

            {cat.list.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.path}
                  className={`${styles.menuLink} ${
                    pathName === item.path && styles.active
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </div>
            ))}

            {/* {cat.list.map((item) => {
              console.log(item.title);
              <MenuLink key={item.title} items={item} />;
            })} */}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
