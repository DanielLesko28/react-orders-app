import { Link } from "react-router-dom";

const Bookmark = ({ name, icon, link }) => {
  return (
    <li className="mb-4">
      <Link
        to={link}
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
      >
        {name}
      </Link>
    </li>
  );
};

export default Bookmark;
