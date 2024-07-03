import { Link } from "react-router-dom";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { logOutUser } from "../features/user/userSlice";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [changeHeader, setChangeHeader] = useState(false);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("scroll", onChangeHeader);
  return (
    <header
      className={
        changeHeader
          ? "fixed left-0 top-0 z-50 w-full bg-white shadow-md transition duration-500"
          : "fixed left-0 top-0 z-50 w-full bg-transparent transition duration-500"
      }
    >
      <nav className="mx-auto flex w-full max-w-screen-xl items-center gap-x-2 px-6 py-3">
        <div className="flex flex-grow">
          <Link to="/">
            <img
              className="w-32 cursor-pointer sm:w-44"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden items-center overflow-hidden rounded-full bg-amber-100 p-1 ring-red-300 focus:ring-4 sm:flex">
          <SearchOrder />
        </div>
        <div className="flex items-center justify-end space-x-2 sm:space-x-4">
          <Link to="/cart">
            <div className="relative flex cursor-pointer">
              <span className="bg-primary poppins absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-white">
                {totalQuantity}
              </span>
              <BsCart2 className="h-6 w-6 cursor-pointer text-gray-700" />
            </div>
          </Link>
          {username && (
            <>
              <img
                src={userIcon}
                alt="user_icon"
                className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
              />
              <p className="poppins hidden text-gray-700 sm:block">
                {username}
              </p>
              <FiLogOut
                className="h-6 w-6 cursor-pointer text-gray-700"
                onClick={() => dispatch(logOutUser())}
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;
