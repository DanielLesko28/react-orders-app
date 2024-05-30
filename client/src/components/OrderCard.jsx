import React from "react";

const OrderCard = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3>Číslo objednávky: {data.orderNumber} </h3>
        <h4
          className={`mt-2 ${data.isPaid ? "text-green-600" : "text-red-600"}`}
        >
          {data.isPaid ? "Zaplaceno" : "Nezaplaceno"}
        </h4>
      </div>
      <div className="flex justify-between">
        <h5>Dátum objednávky: {data.orderDate}</h5>
        <p>Potřebujete poradit?</p>
      </div>
      <div className="flex justify-between">
        <h5>Cena celkem: {data.price} Kč</h5>
        <p>Potřebujete poradit?</p>
      </div>
    </div>
  );
};

export default OrderCard;
