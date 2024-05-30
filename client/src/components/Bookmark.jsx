import { Link, useLocation } from "react-router-dom";

const Bookmark = ({ name, icon, link }) => {
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <li
      className={`mb-4 border-2 bg-zinc-300 text-black ${
        isActive ? "bg-blue-600" : "bg-zinc-300"
      }`}
    >
      <Link
        to={link}
        className={`block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Bookmark;
