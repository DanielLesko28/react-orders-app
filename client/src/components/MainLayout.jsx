import React from "react";
import { Outlet, useLocation } from "react-router";
import MainMenu from "./MainMenu";
import { menuData } from "../data/data";

const MainLayout = () => {
  const location = useLocation();

  const currentMenuItem = menuData.find(
    (item) => item.link === location.pathname
  );

  console.log("location", location.pathname);

  return (
    <div className="flex flex-col p-4 sm:pl-10 sm:pt-4 bg-zinc-100 min-h-screen">
      <div>
        <h1 className="text-black text-2xl sm:text-4xl pb-6 sm:pb-10">
          {currentMenuItem ? currentMenuItem.name : ""}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
          <MainMenu />
        </div>
        <div className="w-full sm:w-4/5 sm:ml-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
