import React from "react";
import { menuData } from "../data/data";
import Bookmark from "./Bookmark";

const MainMenu = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex-shrink-0">
      <h1>Moje objednávky</h1>
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-xl font-semibold">My Sidebar</h1>
      </div>
      <nav className="p-4">
        <ul>
          {menuData.map((item) => (
            <div key={item.id}>
              <Bookmark name={item.name} link={item.link} />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
