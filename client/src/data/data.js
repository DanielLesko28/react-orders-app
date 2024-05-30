import { CiFileOn } from "react-icons/ci";
import { LuFileCheck, LuSettings } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

export const menuData = [
  { id: 1, name: "Moje objednávky", link: "/", icon: <CiFileOn /> },
  { id: 2, name: "faktúry", link: "/faktury", icon: <LuFileCheck /> },
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
