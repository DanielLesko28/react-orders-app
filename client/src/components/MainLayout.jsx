import React from "react";
import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

const MainLayout = () => {
  return (
    <div className="flex flex-col pl-4 pt-4 ">
      <h1 className="text-black text-4xl ml-4">Moje objednávky</h1>
      <MainMenu />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
