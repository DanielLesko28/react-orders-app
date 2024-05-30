import React from "react";

const Faktury = () => {
  return (
    <div className="w-full border-2">
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
          <tr className="border-b border-gray-200">
            <td className="text-center">3,000</td>
            <td className="text-center">12345</td>
            <td className="text-center">1500</td>
            <td className="text-center">
              <a className="text-center">Download</a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-center">3,000</td>
            <td className="text-center">12345</td>
            <td className="text-center">1500</td>
            <td className="text-center">
              <a className="text-center">Download</a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-center">3,000</td>
            <td className="text-center">12345</td>
            <td className="text-center">1500</td>
            <td className="text-center">
              <a className="text-center">Download</a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-center">3,000</td>
            <td className="text-center">12345</td>
            <td className="text-center">1500</td>
            <td className="text-center">
              <a className="text-center">Download</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Faktury;
