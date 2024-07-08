import React from "react";
import { Layout, Menu, } from "antd";
import { FaUsers } from "react-icons/fa";

import AdminImage from "../../assets/admin.jpg";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ dark, collapse }) => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <Sider className="hidden lg:block max-h-full fixed " collapsed={collapse}>
      <Menu
        mode="inline"
        defaultSelectedKeys={pathname}
        defaultOpenKeys={["sub1"]}
        className="h-full text-xs dark:bg-slate-950 dark:text-slate-300"
        theme={dark ? "dark" : "light"}
      >
        {!collapse && (
          <div className="flex flex-col justify-center items-center mb-5">
            <div className="img w-14 m-4">
              <img
                src={AdminImage}
                alt="profile image"
                className="rounded-md shadow-lg shadow-pink-400"
              />
            </div>
            <div className="text-sm">Arunpragash</div>
            <div className="role">admin</div>
          </div>
        )}
        {!collapse && <p className="ml-3 text-xs">Main</p>}
        <SubMenu key="Employee Section" icon={<FaUsers />} title="Employees">
            <Menu.Item key="/employee">
          <Link to='employee'>
              Add Employee
          </Link>
            </Menu.Item>
            <Menu.Item key="/employees">
          <Link to='employees'>
              Employees
          </Link>
            </Menu.Item>
          
        </SubMenu>
        
      </Menu>
    </Sider>
  );
};

export default Sidebar;
