import { Link } from "react-router-dom";
import emptyCart from "../assets/empty_cart.png";

function EmptyCart() {
  return (
    <div className=" flex flex-col items-center justify-center gap-1 p-5">
      <img className="mb-4 h-64 xs:h-48" src={emptyCart} alt="" />
      <h2 className="text-lg font-bold text-gray-700   ">Your cart is empty</h2>
      <p className="text-sm text-gray-500 text-center">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
      <button className="mt-4 outline-none bg-orange-500 p-3 px-4 text-sm text-white">
        SEE RESTAURANTS NEAR YOU
      </button></Link>
      
    </div>
  );
}

export default EmptyCart;
