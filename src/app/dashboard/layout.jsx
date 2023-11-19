import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className=" flex-0.5   bg-[#182237] pl-5">
        <Sidebar />
      </div>
      <div className=" flex-3 flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
