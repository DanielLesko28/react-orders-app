import { CiFileOn } from "react-icons/ci";
import { LuFileCheck, LuSettings } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

export const menuData = [
  { id: 1, name: "Moje objednávky", link: "/", icon: <CiFileOn /> },
  { id: 2, name: "Faktúry", link: "/faktury", icon: <LuFileCheck /> },
  { id: 3, name: "Seznam přáni", link: "/seznam-prani", icon: <CiHeart /> },
  { id: 4, name: "Slevové kódy", link: "/slevove-kody", icon: <CiHeart /> },
  {
    id: 5,
    name: "Věrnostní program",
    link: "/vernostni-program",
    icon: <CiHeart />,
  },
  {
    id: 6,
    name: "Nastavení účtu",
    link: "/nastaveni-uctu",
    icon: <LuSettings />,
  },
];

export const orderData = [
  {
    id: 1,
    orderNumber: 2200245834,
    orderDate: "6. 12. 2022",
    price: 1500,
    isPaid: true,
  },
  {
    id: 2,
    orderNumber: 2200245834,
    orderDate: "6. 12. 2022",
    price: 1500,
    isPaid: true,
  },
  {
    id: 3,
    orderNumber: 2200245834,
    orderDate: "6. 12. 2022",
    price: 1500,
    isPaid: true,
  },
];

export const invoiceData = [
  {
    id: 1,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 2,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 3,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 4,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 5,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 6,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 7,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 8,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
  {
    id: 9,
    invoiceNumber: 121548784515487,
    orderNumber: 121548784515487,
    price: 1500,
  },
];

export const userData = {
  id: 1,
  name: "Daniil Filatov",
  email: "daniil.filatov@newlogic.cz",
};
