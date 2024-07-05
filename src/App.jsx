import { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import AddEmployee from "./components/AddEmployee/AddEmployee";
const { Content } = Layout;
const App = () => {
  const [dark, setDark] = useState(true);
  const [ collapse, setCollapse ] = useState(false);
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  },[dark])
  return (
    <Layout className="max-w-full min-h-screen bg-slate-200">
      <Header
        toggleTheme={() => {
          setDark(!dark);
        }}
        dark={dark}
        collapse={collapse}
        toggleCollapse={() => setCollapse(!collapse)}
      />
      <Layout>
        <Sidebar dark={dark} collapse={collapse} />
        <Content className="dark:bg-slate-600  dark:text-slate-200 p-5">
          <div className="hidden sm:flex justify-between">
            <div className="text-[20px] font-bold">Profile</div>
            <div className="flex">
              <div className="text-[18px]"> icon /</div>
              <div className="text-[18px]"> menu /</div>
              <div className="text-[18px]"> submenu</div>
            </div>
          </div>
          <div className="sm:m-3 bg-white dark:bg-gray-500 min-h-[800px] rounded p-3">
            <AddEmployee />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;