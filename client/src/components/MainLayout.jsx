import React from "react";
import { Outlet } from "react-router";
import MainMenu from "./MainMenu";

const MainLayout = () => {
  return (
    <div className="flex flex-col pl-10 pt-4 bg-zinc-100 h-screen">
      <div>
        <h1 className="text-black text-4xl pb-10">Moje objednávky</h1>
      </div>
      <div className="flex w-full border-2">
        <div className="w-1/5">
          <MainMenu />
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
