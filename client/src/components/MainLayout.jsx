import React from "react";
import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

const MainLayout = () => {
  return (
    <div className="flex pl-10 pt-4 bg-zinc-100 h-screen">
      <div>
        <h1 className="text-black text-4xl pb-10">Moje objednávky</h1>
        <MainMenu />
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
