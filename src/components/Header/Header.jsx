import { Layout } from "antd";
const { Header: Head } = Layout;
import AdminImage from "../../assets/admin.jpg";
import Logo from "../../assets/Logo.png";
import { LuMoon } from "react-icons/lu";
import { ImSun } from "react-icons/im";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { FaRegBell } from "react-icons/fa";

const Header = ({ toggleTheme, dark, collapse, toggleCollapse }) => {
  return (
    <Head className="bg-white text-slate-600 flex justify-between items-cente dark:bg-slate-950 dark:text-slate-300 text-base">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-10 h-4 mt-2 sm:w-20 sm:h-7" />
        <button onClick={toggleCollapse}>
          {collapse ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="">
          {dark ? <ImSun /> : <LuMoon />}
        </button>
        <div className="mx-5">
          <FaRegBell />
        </div>
        <div className="flex items-center">
          <div>A P Arunpragash</div>
          <img
            src={AdminImage}
            alt="admin profile"
            className="rounded-full w-8 mt-1 ml-1"
          />
        </div>
      </div>
    </Head>
  );
};

export default Header;