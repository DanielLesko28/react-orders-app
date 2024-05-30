import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Bookmark = ({ name, icon, link }) => {
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <li
      className={`mb-4 border-2  text-black ${
        isActive ? "bg-blue-600" : "bg-zinc-100"
      }`}
    >
      <Link
        to={link}
        className={`block flex justify-between items-center py-2.5 pl-2 pr-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center">
          <div className="pr-1">{icon}</div>
          {name}
        </div>
        <FaChevronRight />
      </Link>
    </li>
  );
};

export default Bookmark;
