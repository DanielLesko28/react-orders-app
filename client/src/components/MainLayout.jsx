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
    <div className="flex flex-col p-4 md:pl-10 md:pt-4 bg-zinc-100 min-h-screen">
      <div>
        <h1 className="text-black text-2xl md:text-4xl pb-6 md:pb-10">
          {currentMenuItem ? currentMenuItem.name : ""}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
          <MainMenu />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5 md:ml-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
