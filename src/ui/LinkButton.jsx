import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button onClick={() => navigate(-1)} className="relative top-8 pb-4">
        <Link
          to={to}
          className="poppins flex select-none items-center space-x-2 text-gray-700 hover:underline"
        >
          <MdOutlineKeyboardBackspace /> <span>{children}</span>
        </Link>
      </button>
    );
  }
  return (
    <div className="relative top-8 pb-4">
      <Link
        to={to}
        className="poppins flex select-none items-center space-x-2 text-gray-700 hover:underline"
      >
        <MdOutlineKeyboardBackspace /> <span>{children}</span>
      </Link>
    </div>
  );
};

export default LinkButton;
