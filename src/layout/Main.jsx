import { Outlet } from "react-router-dom";
import Nav from "../Components/NavBar/Nav";

const Main = () => {
    const darkMode = true
  return (
    <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] font-serif text-opacity-85`}>
        <Nav></Nav>
      <div className="pt-24 min-h-[calc(100vh-68px)] font-serif">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
