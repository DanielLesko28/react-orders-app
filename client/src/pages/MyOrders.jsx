import React from "react";
import MainMenu from "../components/MainMenu";

const MyOrders = () => {
  return (
    <div className="bg-zinc-100 w-full h-screen">
      <h1 className="text-3xl pl-6 pt-4">Moje objednávky</h1>
      <div className="pl-6">
        <MainMenu />
      </div>
    </div>
  );
};

export default MyOrders;
