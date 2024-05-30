import React from "react";
import { menuData } from "../data/data";
import Bookmark from "./Bookmark";

const MainMenu = () => {
  return (
    <div className="h-screen bg-white text-white w-64 flex-shrink-0">
      <nav className="p-4">
        <ul>
          {menuData.map((item) => (
            <div key={item.id}>
              <Bookmark name={item.name} link={item.link} icon={item.icon} />
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
