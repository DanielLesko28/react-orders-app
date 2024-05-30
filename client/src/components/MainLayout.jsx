import React from "react";
import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

const MainLayout = () => {
  return (
    <div className="flex pl-4 pt-4 ">
      <div>
        <h1 className="text-black text-4xl ml-4">Moje objednávky</h1>
        <MainMenu />
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
