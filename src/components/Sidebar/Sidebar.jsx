import React from "react";
import { Layout, Menu, } from "antd";
import { FaUsers } from "react-icons/fa";

import AdminImage from "../../assets/admin.jpg";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({dark, collapse}) => {
  return (
    <Sider className="hidden lg:block max-h-full fixed " collapsed={collapse}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
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
          <Link to='employee'>
            <Menu.Item key="employee">Employee</Menu.Item>
          </Link>
          <Link to='employees'>
            <Menu.Item key="employees">Employees</Menu.Item>
          </Link>
          <Menu.Item key="2">Employees</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FaUsers />} title="subnav 2">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<FaUsers />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
