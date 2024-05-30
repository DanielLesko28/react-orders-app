import { RiArrowGoBackLine } from "react-icons/ri";

const OrderCard = ({ data }) => {
  return (
    <div className="bg-white mb-4">
      <div className="flex justify-between mb-4 px-4 py-4">
        <h1 className="text-xl">Číslo objednávky: {data.orderNumber} </h1>
        <h4
          className={`mt-2 ${data.isPaid ? "text-green-600" : "text-red-600"}`}
        >
          {data.isPaid ? "Zaplaceno" : "Nezaplaceno"}
        </h4>
      </div>
      <div className="px-4">
        <div className="flex justify-between">
          <h5>Dátum objednávky: {data.orderDate}</h5>
          <p className="text-blue-500">Potřebujete poradit?</p>
        </div>
        <div className="flex justify-between mb-4">
          <h5>Cena celkem: {data.price} Kč</h5>
          <p>314 004 540 (po-pá 8:00-16:00)</p>
        </div>
      </div>
      <div className="flex">
        <button className="rounded-md text-white bg-blue-500 py-2 px-3 mx-4 mb-4">
          Detail
        </button>
        <button className="flex items-center mb-4">
          Zopakovat <RiArrowGoBackLine className="pl-1" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
