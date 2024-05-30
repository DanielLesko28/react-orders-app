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
    <div className="flex flex-col pl-10 pt-4 bg-zinc-100 h-screen">
      <div>
        <h1 className="text-black text-4xl pb-10">
          {currentMenuItem ? currentMenuItem.name : ""}
        </h1>
      </div>
      <div className="flex w-full">
        <div className="w-1/5">
          <MainMenu />
        </div>
        <div className="w-4/5 mr-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
