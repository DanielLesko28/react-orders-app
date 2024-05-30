import { invoiceData } from "../data/data";
import { IoDownloadOutline } from "react-icons/io5";

const Faktury = () => {
  return (
    <div className="w-full bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th scope="col" className="p-2">
              Číslo faktúry
            </th>
            <th scope="col" className="p-2">
              Číslo objednávky
            </th>
            <th scope="col" className="p-2">
              Cena celkem
            </th>
            <th scope="col" className="p-2">
              Stažení
            </th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((item) => (
            <tr key={item.id}>
              <td className="text-center py-4">{item.invoiceNumber}</td>
              <td className="text-center py-4">{item.orderNumber}</td>
              <td className="text-center py-4">-{item.price} Kč</td>
              <td className="text-center py-4">
                <div className="flex items-center justify-center text-blue-500">
                  <IoDownloadOutline className="mr-2" /> Stáhnout
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faktury;
