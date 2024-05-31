import React from "react";
import { menuData, userData } from "../data/data";
import Bookmark from "./Bookmark";
import { CiLogout } from "react-icons/ci";

const MainMenu = () => {
  return (
    <div className=" bg-white text-white w-64 flex-shrink-0">
      <nav className="p-4">
        <div className="flex flex-col items-center mb-4">
          <h1 key={userData.id} className="text-black text-xl">
            {userData.name}
          </h1>
          <h3 className="text-gray-400">{userData.email}</h3>
        </div>
        <ul>
          {menuData.map((item) => (
            <div key={item.id}>
              <Bookmark name={item.name} link={item.link} icon={item.icon} />
            </div>
          ))}
        </ul>
        <button className="text-black flex items-center mt-4">
          <CiLogout className="mr-2" /> Odhlásit se
        </button>
      </nav>
    </div>
  );
};

export default MainMenu;
