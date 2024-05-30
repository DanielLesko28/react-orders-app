import React from "react";
import Bookmark from "./Bookmark";

const MainMenu = () => {
  const data = [
    {
      id: 1,
      name: "Moje objednávky",
      icon: "",
    },
    {
      id: 2,
      name: "Moje objednávky",
      icon: "",
    },
    {
      id: 3,
      name: "Moje objednávky",
      icon: "",
    },
    {
      id: 4,
      name: "Moje objednávky",
      icon: "",
    },
    {
      id: 5,
      name: "Moje objednávky",
      icon: "",
    },
    {
      id: 6,
      name: "Moje objednávky",
      icon: "",
    },
  ];

  return (
    <div>
      {data.map((bookmark) => (
        <div key={bookmark.id}>
          <Bookmark />
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
