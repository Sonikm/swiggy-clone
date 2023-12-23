import logo from "../assets/asset 47.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as OffersIcon } from "../assets/asset 51.svg";
import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { ReactComponent as SignInIcon } from "../assets/asset 49.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PageNav({setIsSearchPlace}) {

  const cartItems = useSelector(store => store.cart.items)

  function handleSearchForRestaurant() {
    setIsSearchPlace(true)
  }

  return (
    <div className="nav-shadow fixed top-0 z-20 flex w-full flex-1 items-center justify-center bg-white">
      <div className="flex max-w-7xl flex-1 items-center justify-between gap-28  p-4 px-8 ">
        <div className="flex items-center justify-between gap-10 ">
          <Link to="/">
            <img
              className="cursor-pointer transition duration-200 hover:scale-110 "
              src={logo}
              alt="logo"
            />
          </Link>
          <button
            onClick={() => handleSearchForRestaurant()}
            className="flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap text-sm"
          >
            <span className="text-bold underline decoration-2 underline-offset-5 transition-all hover:text-red-500 hover:decoration-orange-600">
              IMT Manesar
            </span>
            <p className="mr-2 text-slate-600">522, Sector 8, IMT Manesar </p>
            <FontAwesomeIcon icon={faChevronDown} className="text-red-500" />
          </button>
        </div>
        <ul className="flex items-center justify-between gap-16 whitespace-nowrap text-base">
          <li>
            <Link
              to="search"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <SearchIcon className="nav-icon" /> <span>Search</span>
            </Link>
          </li>
          <li>
            <Link
              to="offers"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <OffersIcon className="nav-icon" />
              <div className="relative">
                <span>Offers </span>
                <span className="absolute  -top-3 text-[10px]  font-bold text-orange-400">
                  NEW
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="signIn"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <SignInIcon className="nav-icon" /> <span>Sign In</span>
            </Link>
          </li>
          <li>
            <Link
              to="cart"
              className="flex cursor-pointer items-center justify-center gap-2 text-slate-600 hover:text-red-500"
            >
              <FontAwesomeIcon icon={faCartShopping} /> <span>Cart ({cartItems.length}) </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
