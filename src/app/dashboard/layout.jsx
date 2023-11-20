import Footer from "../ui/dashboard/footer/Footer";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-0.5   bg-[#182237] pl-5 min-h-[100vh]">
        <Sidebar />
      </div>
      <div className=" flex-3 flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
